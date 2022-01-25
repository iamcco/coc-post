import { OutputChannel, workspace, window } from 'coc.nvim';
import fetch, {RequestInit} from 'node-fetch';
import createHttpProxy from 'https-proxy-agent';
import prettyHrtime from 'pretty-hrtime';

let channel: OutputChannel

const print = (
  channel: OutputChannel,
  name: string,
  text: string,
  notStartNewLine?: boolean,
  inline?: boolean,
  fold?: boolean
) => {
  !inline && channel.append(`${notStartNewLine ? '' : '\n'}${name}: `.padEnd(30, '=') + '<<\n')
  fold && channel.append('{{{\n')
  channel.append(`\n${text}\n`)
  fold && channel.append('\n}}}')
  !inline && channel.append(`\n${name}: `.padEnd(30, '=') + '<<\n')
}

export const doPost = async () => {
  if (!channel) {
    channel = window.createOutputChannel('post')
  }
  const document = await workspace.document
  if (document && document.textDocument) {
    const text = document.textDocument.getText()
    if (!text) {
      return
    }
    const lines = text.trim().split('\n')
    const headers: Record<string, string> = {}
    let isPasterHeadersDone = false
    let url = ''
    let method = 'GET'
    let body = []

    for (let idx = 0; idx < lines.length; idx++) {
      const line = lines[idx];
      if (line.trim() === '') {
        isPasterHeadersDone = true
        continue
      }
      if (!isPasterHeadersDone) {
        const m = line.match(/^[ \t]*([^ \t]+?):[ \t]+(.*)$/)
        if (m) {
          if (m[1] === 'Method') {
            method = m[2]
          } else if (m[1] === 'URL') {
            url = m[2]
          } else {
            headers[m[1]] = m[2]
          }
        } else {
          const singleRowMethodUrlDeclaration = line.match(/^(POST|GET|HEAD|OPTIONS|PATCH|PUT|DELETE|TRACE|CONNECT)\s+([^ \t].+)$/i);
          if (singleRowMethodUrlDeclaration) {
            method = singleRowMethodUrlDeclaration[1];
            url = singleRowMethodUrlDeclaration[2];
          }
        }
      } else {
        body.push(line)
      }
    }
    if (url) {
      try {
        if (!url.startsWith('http')) {
          url = `https://${url}`
        }
        const params: RequestInit = {
          method,
          headers,
        }
        const content = body.join('\n')
        if (method !== 'GET') {
          const contentType = headers['Content-Type']
          if (contentType && /application\/json/.test(contentType)) {
            try {
              params['body'] = JSON.stringify(eval(`(${content})`))
            } catch (error) {
              params['body'] = content
            }
          } else if (contentType && /application\/x-www-form-urlencoded/.test(contentType)) {
            params['body'] = encodeURI(content)
          } else {
            params['body'] = content
          }
        }
        channel.hide()
        channel.clear()
        channel.show()
        print(channel, 'Request', JSON.stringify({
          url,
          ...params
        }, null, 2), true)
        const postConfig = workspace.getConfiguration('post')
        const proxy = postConfig.get<string>('agent', '')
        if (proxy) {
          params.agent = createHttpProxy(proxy)
        }
        const startTime = process.hrtime()
        const res = await fetch(url, params)
        const timeTaken = process.hrtime(startTime)
        print(channel, 'Status', `Status: ${res.status} - ${res.statusText}`, false, true)
        print(channel, 'Time', `Time: ${prettyHrtime(timeTaken)}`, false, true)
        print(channel, 'Headers', JSON.stringify(res.headers.raw(), null, 2), false, false, true)
        const text = await res.text()
        try {
          const json = JSON.parse(text)
          print(channel, 'Body', JSON.stringify(json, null, 2))
        } catch (error) {
          print(channel, 'Body', text)
        }
        setTimeout(async () => {
          const wins = await workspace.nvim.windows
          if (wins) {
            for (let len = 0; len < wins.length; len++) {
              const win = wins[len];
              const buf = await win.buffer
              const name = await buf.name
              if (name === 'output:///post') {
                win.setOption('wrap', false, true)
                win.setOption('foldenable', true, true)
                win.setOption('foldmethod', 'marker', true)
              }
            }
          }
        }, 0);
      } catch (error) {
        print(channel, 'Error', error.stack || error.message || error)
      }
    } else {
      channel.hide()
      channel.clear()
      channel.show()
      print(channel, 'Error', 'Url is required')
    }
  }
}

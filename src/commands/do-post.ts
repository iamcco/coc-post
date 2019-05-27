import { OutputChannel, workspace } from 'coc.nvim';
import fetch from 'node-fetch';

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
    channel = workspace.createOutputChannel('post')
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
        }
      } else {
        body.push(line)
      }
    }
    if (url) {
      try {
        const params = {
          method,
          headers,
        }
        if (method !== 'GET') {
          const contentType = headers['Content-Type']
          if (contentType && /application\/json/.test(contentType)) {
            try {
              params['body'] = JSON.stringify(eval(`(${body.join('').trim()})`))
            } catch (error) {
              params['body'] = body.join('\n')
            }
          } else if (contentType && /application\/x-www-form-urlencoded/.test(contentType)) {
            params['body'] = encodeURI(body.join('\n'))
          } else {
            params['body'] = body.join('\n')
          }
        }
        channel.clear()
        channel.show()
        print(channel, 'Request', JSON.stringify({
          url,
          ...params
        }, null, 2), true)
        const res = await fetch(url, params)
        print(channel, 'Status', `Status: ${res.status} - ${res.statusText}`, false, true)
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
    }
  }
}

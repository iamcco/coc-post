import { ExtensionContext, languages, workspace, commands, listManager } from 'coc.nvim';
import { homedir } from 'os';

import { completionProvider } from './provider/completion';
import { doPost } from './commands/do-post';
import { newPost } from './commands/new-post';
import Post from './source/post';

async function detectFileName() {
  const doc = await workspace.document
  if (doc && doc.buffer) {
    if (!(await doc.buffer.valid)) {
      return
    }
    const filetype = await doc.buffer.getOption('filetype') as string
    if (filetype && filetype.trim() !== '') {
      return
    }
    const name = await doc.buffer.name
    if (name && /\.post$/i.test(name)) {
      doc.buffer.setOption('filetype', 'post')
    }
  }
}

export async function activate(context: ExtensionContext) {
  const config = workspace.getConfiguration('post')
  const isEnable = config.get<boolean>('enable', true)
  if (!isEnable) {
    return
  }

  const isDetect = config.get<boolean>('detect', true)
  const postRootPath = config.get<string>('root', '~/.coc-post')
    .replace(/^~/, homedir())

  if (isDetect) {
    context.subscriptions.push(
      workspace.registerAutocmd({
        event: 'BufEnter',
        request: false,
        callback: detectFileName
      })
    )
  }

  context.subscriptions.push(
    languages.registerCompletionItemProvider(
      'post',
      'post',
      ['post'],
      completionProvider,
      [],
      99
    )
  )

  context.subscriptions.push(
    commands.registerCommand('post.do', () => {
      setTimeout(() => {
        doPost()
      }, 500);
    })
  )

  context.subscriptions.push(
    commands.registerCommand('post.new', () => {
      newPost(postRootPath)
    })
  )

  context.subscriptions.push(
    listManager.registerList(new Post(postRootPath))
  )
}

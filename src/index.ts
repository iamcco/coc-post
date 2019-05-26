import { ExtensionContext, languages } from 'coc.nvim';

import { completionProvider } from './provider/completion';

export async function activate(context: ExtensionContext) {

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
}

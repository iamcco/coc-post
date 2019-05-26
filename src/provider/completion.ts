import { CompletionItemProvider } from 'coc.nvim';
import { CompletionItem, Range, Position, MarkupKind } from 'vscode-languageserver-protocol';

import { requestHeaders } from '../data/requestHeaders';

export const completionProvider: CompletionItemProvider = {
  provideCompletionItems(document, position): CompletionItem[] {
    const text = document.getText(Range.create(
      Position.create(position.line, 0),
      Position.create(position.line, position.character),
    ))
    if (/^[ \t]*[^ \t]*$/.test(text)) {
      return Object.keys(requestHeaders).map<CompletionItem>(name => ({
        label: name,
        insertText: name,
        documentation: {
          kind: MarkupKind.Markdown,
          value: requestHeaders[name].document.join('\n')
        }
      }))
    }
    return []
  }
}

import { CompletionItemProvider } from 'coc.nvim';
import { CompletionItem, Range, Position, MarkupKind, CompletionItemKind } from 'vscode-languageserver-protocol';

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
        kind: CompletionItemKind.Method,
        insertText: requestHeaders[name].isMethod ? `${name} ` : `${name}: `,
        documentation: {
          kind: MarkupKind.Markdown,
          value: requestHeaders[name].document.join('\n')
        }
      }))
    } else if (/^[ \t]*[^ \t]+[ \t]\w*$/.test(text)) {
      const m = text.match(/^[ \t]*([^ \t]+?):?[ \t]\w*$/)
      if (m && requestHeaders[m[1]]) {
        return requestHeaders[m[1].trim()].values.map<CompletionItem>(v => ({
          label: v,
          kind: CompletionItemKind.Value,
          insertText: v
        }))
      }
    }
    return []
  }
}

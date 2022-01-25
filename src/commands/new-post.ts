import { workspace, Uri, window } from 'coc.nvim';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

export const newPost = async (postRootPath: string) => {
  if (!existsSync(postRootPath)) {
    mkdirSync(postRootPath)
  }
  const name = await window.requestInput('New Post Name')
  if (name && name.trim() !== '') {
    const postPath = join(postRootPath, `${name}.post`)
    workspace.openResource(Uri.file(postPath).toString())
  }
}

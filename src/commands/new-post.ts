import { workspace, Uri } from 'coc.nvim';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

export const newPost = async (postRootPath: string) => {
  if (!existsSync(postRootPath)) {
    mkdirSync(postRootPath)
  }
  const name = await workspace.requestInput('New Post Name')
  if (name && name.trim() !== '') {
    const postPath = join(postRootPath, `${name}.post`)
    workspace.openResource(Uri.file(postPath).toString())
  }
}

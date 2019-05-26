# post extension for coc

Postman for coc.nvim

[![image](https://user-images.githubusercontent.com/5492542/58384590-f4b9da00-8015-11e9-864d-f231562ff7f9.png)](https://asciinema.org/a/mPF8Em7gBWucjuHlhSFQLMfQL)

## Install

``` vim
CocInstall coc-post
```

## Usage

autocomple request header in post file

Command:

- `post.do` do request of current post file
- `post.new` create a new post file

List:

- `CocList post` show all post files

## Config

``` jsonc
"post.enable": {
  "type": "boolean",
  "default": true,
  "description": "enable this extension?"
},
"post.detect": {
  "type": "boolean",
  "default": true,
  "description": "is enable detect filetype for *.post file"
},
"post.root": {
  "type": "string",
  "default": "~/.coc-post",
  "description": "directory to save post file with post.new command"
}
```

### Buy Me A Coffee ☕️

![btc](https://img.shields.io/keybase/btc/iamcco.svg?style=popout-square)

![image](https://user-images.githubusercontent.com/5492542/42771079-962216b0-8958-11e8-81c0-520363ce1059.png)


# http-compress

[![Development sponsored by voltra.co](https://img.shields.io/badge/Development%20sponsored%20by-Voltra.co-yellow.svg)](https://voltra.co/)

HTTP framework independent response compression.

- properly checks the `Accept-Encoding` header
- supports `gzip`, `deflate` and `identity` encodings
- sets `Content-Encoding`

## Usage

```js
'use strict'

const http = require('http')
const compress = require('http-compress')

const server = http.createServer((req, res) => {
  compress(req, res, 'oh hey!')
})

server.listen(() => {
  console.log(`http://localhost:${server.address().port}`)
})
```

## Installation

```bash
$ npm install http-compress
```

## API

### compress(req, res, body)

## Kudos

This was inspired by [koajs/compress](https://github.com/koajs/compress).

## License

MIT

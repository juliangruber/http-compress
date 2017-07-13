'use strict'

const zlib = require('zlib')
const accepts = require('accepts')

const encodings = {
  gzip: zlib.createGzip,
  deflate: zlib.createDeflate
}

module.exports = (req, res, body) => {
  const encoding = accepts(req).encoding(['gzip', 'deflate', 'identity'])
  if (!encoding) return acceptsError(req, res)
  if (encoding === 'identity') return res.end(body)
  res.setHeader('Content-Encoding', encoding)
  const encoder = encodings[encoding]()
  encoder.on('error', encodingError)
  encoder.pipe(res)
  encoder.end(body)
}

const acceptsError = (req, res) => {
  res.statusCode = 406
  res.end('supported encodings: gzip, deflate, identity')
}

const encodingError = (req, res) => {
  res.statusCode = 500
  res.end('encoding error')
}

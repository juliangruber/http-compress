'use strict'

const http = require('http')
const compress = require('.')

const server = http.createServer((req, res) => {
  compress(req, res, 'oh hey!')
})
server.listen(() => {
  console.log(`http://localhost:${server.address().port}`)
})

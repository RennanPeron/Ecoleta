const express = require('express')
const server = express()

const pages = require('./pages')

const nunjucks = require('nunjucks')
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// Habilitando req.body
server.use(express.urlencoded({extended: true}))

server.use(express.static("public"))

server.get('/', pages.index)

.get('/create-point', pages.pageCreatePoint)

.post('/save-point', pages.savePoint)

.get('/search-results', pages.pageSearchResults)

server.listen(3000)
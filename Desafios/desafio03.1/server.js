const express = require('express')
const nunjucks = require('nunjucks')


const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    noCache: true
})


server.get('/', function(request, response) {
    return response.render('home')
})

server.get('/courses', function(request, response) {
    return response.render('courses')
})

server.get('/sobre', function(request, response) {
    return response.render('sobre')
})

server.use(function(request, response) {
    response.status(404).render('not-found')
})

server.listen(3000, function() {
    console.log('server is running...')
})
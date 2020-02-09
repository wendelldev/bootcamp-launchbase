const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data')


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
    return response.render('courses', {data})
})

server.get("/courses/:id", function(request, response) {
    const id = request.params.id;

    const site = data.find(function(site) {
        return site.id == id
    })

    if (!site) {
        return response.render('not-found')
    }

    return response.render('course', {item: site});
  });

server.get('/sobre', function(request, response) {
    return response.render('sobre')
})

server.use(function(request, response) {
    response.status(404).render('not-found')
})

server.listen(3000, function() {
    console.log('server is running...')
})
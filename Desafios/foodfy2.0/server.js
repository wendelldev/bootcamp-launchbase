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

server.get('/', function(req, res) {
    res.render('home', {data})
})

server.get('/about', function(req, res) {
    res.render('about')
})

server.get('/recepts', function(req, res) {
    res.render('recepts', {data})
})

server.get("/recepts/:index", function (req, res) {
    const recipeIndex = req.params.index;
  
    res.render('recipe', {item: data[recipeIndex]});
  })

server.listen(3000, function() {
    console.log('Server is running')
})
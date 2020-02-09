const express = require('express')
const nunjucks = require('nunjucks')
const videos = require('./data')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    noCache: true
})


server.get('/', function(request, response) {
    const about = {
        avatar_url: "https://avatars2.githubusercontent.com/u/59696086?s=400&u=44621d395e724f00921af1c81a35782ebb6f5200&v=4",
        name: "Wendell Lucena",
        role: "Estudante - Launchbase",
        description: "Programador Python. Focado em se tornar um web fullstack com JavaScript, React e React Native.",
        links: [
            { name: "Github", url: "https://github.com/wendelldev" },
            { name: "Twitter", url: "https://twitter.com/WendellLucena2" },
            { name: "Linkedin", url: "https://www.linkedin.com/in/wendell-lucena-18a57273/" },
        ]
    }

    return response.render('about', { about })
})

server.get('/portfolio', function(request, response) {
    return response.render('portfolio', {items: videos})
})

server.get('/video', function(request, response) {
    const id = request.query.id

    const video = videos.find(function(video) {
        return video.id == id
    })

    if (!video) {
        return response.send('Video nof found!')
    }

    return response.render('video', { item: video })

})

server.listen(5000, function() {
    console.log('Server is running')
})
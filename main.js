const http = require('http')
const port = process.env.PORT || 3000

const fs = require('fs')

const homePage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')
const notFoundPage = fs.readFileSync('notFound.html')
const contactPage = fs.readFileSync('contact.html')

function server_callback(req, res) {
    switch(req.url) {
        case '/about':
            res.end(aboutPage)
            break
        case '/contact':
            res.end(contactPage)
            break
        case '/' :
            res.end(homePage)
            break
        default:
            res.writeHead(404)
            res.end(notFoundPage)
    }
}

const server = http.createServer(server_callback)
server.listen(port)
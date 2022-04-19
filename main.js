const http = require('http')
const port = process.env.PORT || 3000

function server_callback(req, res) {
    switch(req.url) {
        case '/about':
            res.end("The about page")
            break
        case '/contact':
            res.end("The contact page")
            break
        case '/' :
            res.end("The home page")
            break
        default:
            res.writeHead(404)
            res.end("Page not found")
    }
}

const server = http.createServer(server_callback)
server.listen(port)
const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer( function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.write('Hello World!')
    res.end()
}).listen(port)
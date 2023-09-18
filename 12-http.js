const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url==='/'){
        res.end('Welcome to our home page')
    }
    if(req.url==='/about'){
       res.end('Welcome to about page')
    }
    res.end(`
        <h1>OOPS!</h1>
        <p>We cant seem to find the page</p>
        <a href="/">back home</a>
    `)
})

server.listen(5000)
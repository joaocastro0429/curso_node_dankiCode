import http from 'http'
const port = 3000

const server = http.createServer((req, res) => {
    res.setHeader = ('Content-Type', 'text/plain')

    res.end("hello danki")
})


server.listen(port, () => {
    console.log(`running Server http://localhost:${port}`)
})
import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead((200))
  res.end('Hello')

})
server.listen(4000)


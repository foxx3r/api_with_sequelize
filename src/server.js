const http = require("http")
const app = require("./api/middleware/app")
require("dotenv").config()

const server = http.createServer(app)

const PORT = process.env.PORT || 8080
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1"

server.listen(PORT, HOSTNAME, () => {
  console.log(`servidor rodando na porta ${PORT}`)
})

import express from 'express'
import http from 'http'
import { Server } from 'socket.io' 
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const server = http.createServer(app)
const io = new Server(server)


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__filename)
console.log(__dirname)


//127.0.0.1:9090/Login.html
app.use(express.static(__dirname))


io.on('connection', (socket)=> {
   
    let UserId 
})








//소켓 연결 설정
io.on('connection', (socket) => {
    console.log('사용자가 연결되었습니다.')
})









//가상서버로 client.html 갈수 있다
server.listen(8080, () => {
    console.log('서버가 8080포트에서 실행중!')
})

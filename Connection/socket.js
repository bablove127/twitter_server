import { Server } from "socket.io"
import jwt from 'jsonwebtoken'
import { config } from "../config.js"

class Socket {
    constructor(server) {
        this.io = new Server(server, {
            // port 가 다르게 들어오게 될 경우를 막아주는 방어코드
            cors: {
                origin: '*'
            }
        })

        this.io.use((socket, next) => {
            const token = socket.handshake.auth.token
            if(!token) {
                return next(new Error('인증 에러'))
            }
            jwt.verify(token, config.jwt.secretKey, (error, decoded) => {
                if(error) {
                    return next(new Error('인증 에러'))
                }
                next()
            })
        })

        this.io.on('connection', (socket) => {
            console.log('클라이언트 접속')
        })
    }
}

let socket

export function initSocket(server) {
    if(!socket) {
        socket = new Socket()
    }
}

// 소켓 체크용도
export function getSocketIo() {
    if(!socket) {
        throw new Error('먼저 init을 실행하세요')
    }
    return socket.io
}
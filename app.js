import express from 'express'
import tweetsRouter from './router/tweets.js' // 나중에 tweets를 sns로 바꾸기
import authRouter from './router/auth.js'
import { config } from './config.js'
import { initSocket } from './connection/socket.js'
// import { db } from './db/database.js'
// npm i cors
import cors from 'cors'
// import { sequelize } from './db/database.js'
import { connectDB } from './db/database.js'

const app = express()

app.use(cors({
    origin: '*',
    credentials: true
}))

// 미들웨어 등록, 시작시 실행
app.use(express.json())

app.use('/tweets', tweetsRouter)
app.use('/auth', authRouter)

app.use((req, res, next) => {
    res.sendStatus(404)
})

connectDB()
    .then(() => {
        const server = app.listen(config.host.port)
        initSocket(server)
    }).catch(console.log)

// db 연결 확인
// db.getConnection().then((connection) => console.log(connection))

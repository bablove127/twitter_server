import express from 'express'
import tweetsRouter from './router/router_tweets.js'
import authRouter from './router/router_auth.js'
import {config} from './Config.js'
import { initSocket } from './Connection/socket.js'


const app = express()

app.use(express.json())

app.use('/tweets', tweetsRouter)
app.use('/auth', authRouter)


app.use((req, res, next) => {
    res.sendStatus(404)
})


const server = app.listen(config.host.port)
initSocket(server)







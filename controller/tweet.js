import * as tweetRepository from '../data/tweet.js'
import { getSocketIo } from '../connection/socket.js'

// 모든 트윗을 가져오는 함수
export async function getTweets(req, res) {
    const username = req.query.username
    const data = await(username ? tweetRepository.getAllByUsername(username) : tweetRepository.getAll())
    res.status(200).json(data)
}

// id에 해당하는 트윗을 가져오는 함수
export async function getTweetById(req, res, next) {
    const id = req.params.id
    const tweet = await tweetRepository.getById(id)
    if(tweet) {
        res.status(200).json(tweet)
    }else {
        res.status(404).json({message: `${id}의 트윗이 없습니다`})
    }
}

// request로 받은 데이터로 트윗을 생성하는 함수
export async function CreateTweet(req, res, next) {
    const { text } = req.body
    const tweet = await tweetRepository.create(text, req.userId)
    res.status(201).json(tweet)
    getSocketIo().emit('tweets', tweet)
}

// id에 해당하는 트윗을 수정하는 함수
export async function PutTweetById(req, res, next) {
    const id = req.params.id
    const text = req.body.text
    const tweet = await tweetRepository.getById(id)
    if(!tweet) {
        res.status(404).json({message: `${id}의 트윗이 없습니다`})
    }
    if(tweet.userId !== req.userId) {
        return res.sendStatus(403)
    }
    const updated = await tweetRepository.update(id, text)
    res.status(200).json(updated)
} 

// id에 해당하는 트윗을 삭제하는 함수
export async function DelTweet(req, res, next){
    const id = req.params.id
    const tweet = await tweetRepository.getById(id)
    if(!tweet){
        return res.status(404).json({message: `${id}의 트윗이 없습니다`})
    }
    if(tweet.userId !== req.userId){
        return res.sendStatus(403)
    }
    await tweetRepository.deleteTweet(id)
    res.sendStatus(204)
}
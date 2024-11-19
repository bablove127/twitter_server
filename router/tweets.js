// 글 관련 파일
import express from 'express'
import * as tweetController from '../controller/tweet.js'
import { body } from 'express-validator'
import { validate } from '../middleware/validator.js'
import { isAuth } from '../middleware/auth.js'
 
const router = express.Router()

const validateTweet = [
    body('text').trim().isLength({min:3}).withMessage('최소 3자이상 입력하세요'), validate
]

// data


// 해당 아이디에 대한 트윗 가져오기
// GET
// http://127.0.0.1:9090/tweets?username=:username
router.get('/', isAuth, tweetController.getTweets)

// 글 번호에 대한 트윗 가져오기
// GET
// http://127.0.0.1:9090/tweets/:id
router.get('/:id', isAuth, tweetController.getTweetById)

// 트윗 올리기
// POST
// http://127.0.0.1:9090/tweets
// json 형태로 입력 후 추가된 데이터 까지 모두 json으로 출력
router.post('/', validateTweet, isAuth, tweetController.CreateTweet)

// 트윗 수정하기
// PUT
// http://127.0.0.1:9090/tweets/:id
// json 형태로 입력 후 추가된 데이터 까지 모두 json으로 출력
router.put('/:id', validateTweet, isAuth, validateTweet, tweetController.PutTweetById)

// 트윗 삭제하기
// DELETE
// http://127.0.0.1:9090/tweets/:id
router.delete('/:id', isAuth, tweetController.DelTweet)


// 외부에서 가져다 쓸 수 있게
export default router
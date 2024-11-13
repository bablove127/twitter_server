//회원관리
import express from 'express'
import * as authController from '../controller/Controller_auth.js'
import { body } from 'express-validator'
import { validate } from '../Middleware/Validate.js'


const router = express.Router()


const validateTweet = [
    body('username').trim().isLength({min:3}).withMessage('최소 2자 이상 입력').matches(/^a-zA-Z0-9]*$/).withMessage('특수문자 사용불가'),
    body('password').trim().isLength({min:4}).withMessage('최소 4자 이상 입력'),
    body('email').trim().isEmail().withMessage('이메일 형식확인'), 
    validate
]



//회원가입
router.post('/signup', validateTweet, authController.signup)

//로그인
router.post('/login', authController.login)

// 로그인 유지
router.post('/me', authController.verify)


export default router
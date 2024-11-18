import * as authRepository from '../data/auth.js'
import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { config } from '../config.js' 

async function createJwtToken(id) {
    return jwt.sign(
        {id}, config.jwt.secretKey , { expiresIn: config.jwt.expiresInSec }
    )
}

// signup
export async function signup(req, res, next) {
    const { username, password, name, email, url} = req.body
    // 회원 중복 체크
    const found = await authRepository.findByUsername(username)
    if(found) {
        return res.status(409).json({ message: `${username}해당 아이디가 이미 존재합니다`})
    }
    const hashed = bcrypt.hashSync(password, config.bcrypt.saltRounds)

    const users = await authRepository.createUser({
        username,
        password: hashed,
        name,
        email,
        url}) // 중괄호를 사용해야 한꺼번에 하나의 파라미터로 들어간다
    const token = await createJwtToken(users.id)
    res.status(201).json({token, username})
}

// login
export async function login(req, res, next) {
    const { username, password } = req.body
    const user = await authRepository.findByUsername(username)
    if(!user) {
        return res.status(401).send(`${username} 아이디를 찾을 수 없음`)
    }
    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword){
        return res.status(401).json({message: `아이디 또는 비밀번호 확인`})
    }
    const token = await createJwtToken(user.id)
    res.status(200).json({ token, username })
}

// verify
export async function verify(req, res, next) {
    const token = req.header['Token']   // header를 까봤을 때 Token이라는 항목을확인
    if(token) {
        res.status(200).json(token)
    }
}

export async function me(req, res, next) {
    const user = await authRepository.findById(req.userId)
    if(!user) {
        return res.status(404).json({ message: '사용자가 없음' })
    }
    res.status(200).json({token: req.token, username: user.username})
}
import * as authRepository from '../data/Data_auth.js'

export async function signup(req, res, next){
    const { username, password, name, email} = req.body
    const users = await authRepository.createUser(username, password, name, email)

}

let users = [

]


signup
export async function login(req, res, next){
    const {username, password} = req.body
    const user = await authRepository.login(username)
    if(user){
        res.status(201).json(`${username} 로그인 완료`)
    }else{
        res.status(404).json(`{message : }`)
    }
}

//login

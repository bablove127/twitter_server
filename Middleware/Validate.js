import { validationResult } from "express-validator";

export const validate = (req, res, next) => {
    const errors = validationResult(req)
    //에러가 없다면 다음으로 리턴
    if(errors.isEmpty()){
        return next()
    }
    return res.status(400).json({message: errors.array()[0].msg})
}
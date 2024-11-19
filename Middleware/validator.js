import { validationResult } from "express-validator";

export const validate = (req, res, next) => {
    const errors = validationResult(req)
    if(errors.isEmpty()) {        // 에러가 없다면
        return next()
    }
    return res.status(400).json({ message: errors.array()[0].msg})
}
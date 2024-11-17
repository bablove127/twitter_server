import mysql from 'mysql2'
import { Config } from '../Config.js'

const pool = mysql.createPool({
    host: config.db.host,
    user: config.db.user,
    database: config.db.database,
    password: config.db.password
})

export const db = pool.promise()

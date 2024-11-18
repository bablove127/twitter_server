// import mysql from 'mysql2'           Sequelize사용을 위해 주석철
import SQ from 'sequelize'
import { config } from '../config.js'


// mysql을 빠르게 연결해주기 위한 코드
// const pool = mysql.createPool({
//     host: config.db.host,
//     user: config.db.user,
//     database: config.db.database,
//     password: config.db.password
// })  

const { host, user, database, password } = config.db
export const sequelize = new SQ.Sequelize(database, user, password, {
    host,
    dialect: 'mysql',
    logging: false // 하이버네이트: 쿼리를 만들어주는 SW  성능을 위해 false
})

// export const db = pool.promise()
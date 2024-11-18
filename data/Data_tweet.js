import SQ from 'sequelize'
import { sequelize } from '../db/database.js'


const SELECT_JOIN = 'SELECT tw.id, u.username, u.name, u.url, tw.userId, tw.text, tw.createdAt FROM users as u JOIN tweets as tw ON u.id = tw.userId'

const ORDER_DESC = 'ORDER BY tw.createdAt DESC'






export async function remove(id){
    return createTweet.findByPk(id).then((tweet) => {
        tweet.destroy()
    })
}
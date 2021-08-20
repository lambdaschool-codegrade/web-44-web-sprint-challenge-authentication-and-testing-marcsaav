const db = require('../../data/dbConfig')

module.exports = async (req, res, next) => {
    const { username } = req.body
    const users = await db('users')
    if(users.length > 0) {
        users.map((user) => {
            if(user.username === username) {
                next({ status: 422, message: 'username taken'})
            } else {
                next()
            }
        })
    } else {
        next()
    }
}
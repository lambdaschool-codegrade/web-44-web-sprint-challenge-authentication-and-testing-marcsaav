const User = require('../users/user-model')
const bcrypt = require('bcrypt')

module.exports = async (req, res, next) => {
    const { username, password } = req.body
    const user = await User.findBy(username)
    if(!user || bcrypt.compareSync(password, user.password)) {
        next({ status:400, message: 'invalid credentials'})
    } else {
        next()
    }
}
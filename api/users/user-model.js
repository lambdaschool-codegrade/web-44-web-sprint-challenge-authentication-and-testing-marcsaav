const db = require('../../data/dbConfig')

const findById = async (id) => {
    const user = await db('users').where({ id }).first()
    return user
}

const findBy = async (filter) => {
    const user = await db('users').where({ filter }).first()
    return user
}

const createUser = async (user) => {
    const [id] = await db('users').insert(user)
    return findById(id)
}

module.exports = {
    findBy,
    findById,
    createUser
}
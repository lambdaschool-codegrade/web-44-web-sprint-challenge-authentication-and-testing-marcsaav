const request = require('supertest')
const db = require('../data/dbConfig')
const server = require('./server')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

afterAll(async () => {
    await db.destroy()
})

describe('[POST] /auth/register', () => {
    it('should return a 201 status', async () => {
        const res = await request(server).post('/api/auth/register').send({ username: 'Gayathri', password: '1234' })
        expect(res.status).toBe(201)
    }),
    it('should return the newly constructed user', async () => {
        const res = await request(server).post('/api/auth/register').send({ username: 'Marcos', password: '1234' })
        expect(res.body).toHaveProperty('username', 'Marcos')
        expect(res.body).toHaveProperty('password')
    })
})

describe('[POST] /auth/login', () => {
    it('should return a 200 status', async () => {
        const res = await request(server).post('/api/auth/login').send({ username: 'Gayathri', password: '1234' })
        expect(res.status).toBe(200)
    }),
    it('should return the newly constructed token', async () => {
        const res = await request(server).post('/api/auth/login').send({ username: 'Gayathri', password: '1234' })
        expect(res.body).toHaveProperty('token')
    })
})
'ues strict'

require('dotenv').config({path: `${__dirname}/../.test.env`})

const server = require('../lib/server.js')
const request = require('superagent')

const API_URL = process.env.API_URL

describe('testing not-found middleware', () => {
  beforeAll(server.start)
  afterAll(server.stop)
  test('true should be true', () => {
    expect(true).toBeTruthy()
  })
})

'ues strict'

require('dotenv').config({path: `${__dirname}/../.test.env`})

const expect = require('expect')
const server = require('../lib/server.js')

describe('testing not-found middleware', () => {
  beforeAll(server.start)
  afterAll(server.stop)
  test('true should be true', () => {
    expect(true).toBeTruthy()
  })
})

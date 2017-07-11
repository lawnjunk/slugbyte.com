'use strict'

const pg = require('pg')
const util = require('./util.js')

let config = {
  max: 10,
  port: 5432,
  idleTimeoutMillis: 20000,
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
}

const state = {
 pool: new pg.Pool(config),
 isConnected: false,
}

module.exports = {
  query: (...args) => {

  },
}

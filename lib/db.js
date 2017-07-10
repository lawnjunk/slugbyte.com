'use strict'

const pg = require('pg')
const kefir = require('kefir')

const pool = new pg.Pool({
  max: 10,
  port: 5432,
  idleTimeoutMillis: 20000,
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
})


'use strict'

require('dotenv').config({path: `${__dirname}/.dev.env`})
require('./lib/server.js').start()


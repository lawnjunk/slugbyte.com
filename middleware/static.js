'use strict'

const express = require('express')
module.exports = express.static(`${__dirname}/../build`)

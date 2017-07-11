'use strict'

const util = require('../lib/util.js')('error-handler')

module.exports = (err, req, res, next) => {
  util.log(err)
  res.sendStatus(err.status || 500)
}

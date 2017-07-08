'use strict'

module.exports = {
  html: (req, res, next) => {
    res.status(404).sendFile(`${__dirname}/../build/404.html`)
  },
  simple: (req, res, next) => {
    res.sendStatus(404)
  }
}

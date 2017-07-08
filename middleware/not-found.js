'use strict'

module.exports = {
  html: (req, res, next) => {
    res.sendFile('/index.html', {root: `${__dirname}/../build`})
  },
  simple: (req, res, next) => {
    res.sendStatus(404)
  }
}

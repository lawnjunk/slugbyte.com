'use strict'

const {Router} = require('express')
const notFound = require('../middleware/not-found.js')
let router = new Router()

router.use(require('../middleware/static.js'))
router.all('/api/*', notFound.simple)
router.all('/*', notFound.html)
router.use(require('../middleware/error-handler.js'))

module.exports = (app) => app.use(router)

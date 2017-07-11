'use strict'

const cors = require('cors')
const morgan = require('morgan')
const express = require('express')
const router = require('./router.js')
const util = require('./util.js')('server')

const state = {
  app: router(express()),
  isOn: false,
  http: null,
}

module.exports = {
  start: () => util.emitter((resolve, reject) => {
    if (state.isOn) 
      return reject(new Error('the server all ready on'))
    state.http = state.app.listen(process.env.PORT, () => {
      util.log('server up', process.env.PORT)
      state.isOn = true
      resolve()
    })
  }),
  stop: () => util.emitter((resolve, reject) => {
    if(!state.http || !state.isOn)
      return reject(new Error('the server is all ready off'))
    state.http.close(() => {
      util.log('server down')
      state.isOn = false
      resolve()
    })
  }),
}

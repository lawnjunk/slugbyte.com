'use strict'

const cors = require('cors')
const morgan = require('morgan')
const express = require('express')
const router = require('./router.js')

const state = {
  app: router(express()),
  isOn: false,
  http: null,
}


module.exports = {
  start: () => new Promise((resolve, reject) => {
    if (state.isOn) 
      return reject(new Error('the server all ready on'))
    state.http = state.app.listen(process.env.PORT, () => {
      console.log('server up', process.env.PORT)
      state.isOn = true
      resolve()
    })
  }),
  stop: () => new Promise((resolve, reject) => {
    if(!state.http || !state.isOn)
      return reject(new Error('the server is all ready off'))
    state.http.close(() => {
      console.log('server down')
      state.isOn = false
      resolve()
    })
  }),
}

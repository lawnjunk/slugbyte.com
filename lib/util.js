'use strict'

const Kefir = require('Kefir')
const colors = require('colors')

let state = { 
  log: 0,
  err: 0,
  colors: ['red', 'grey', 'blue', 'yellow', 'cyan', 'magenta'],
}

let createFormatter = (name) => {
  var colorify = colors[state.colors[Math.floor(Math.random() * state.colors.length)]];
  return (type, ...args) => {
    let heading = [new Date().toUTCString(), `(modules ${name})`, `(${type} #${state[type]++})`]
    if (process.env.NODE_ENV !== 'production'){
      heading.shift()
      heading = heading.map(v => colorify(v))
    }
    return [...heading, ...args].join(' ')
  }
}

module.exports = (moduleName) => {
  let formater = createFormatter(moduleName)
  return {
    log: (...args) => {
      let result = formater(...args)
      console.log(result)
      return result
    },
    err: (...args) => {
      let result = formater(...args)
      console.error(result)
      return result
    },
    promisify: (fn) => (...args) => {
      if(!!fn.flatMap)
        return fn.toPromise()
      return new Promise((resolve, reject) => {
        fn(...args, (err, data) => {
          if(err) return reject(err)
          resolve(data)
        })
      })
    },
    emitter: (cb) => Kefir.fromPromise(new Promise(cb)),
    partial: (fn, ...defaults) => (...args) => {
      return fn(...defaults, ...args)
    },
    compose: (...fns) => (inital) => {
      return fns.reduce((data, next) => next(data), inital)
    }
  }
}














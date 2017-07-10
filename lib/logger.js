'use strict'

let colors = require('colors')

let state = { 
  log: 0,
  err: 0,
  colors: ['red', 'green', 'blue', 'yellow', 'cyan', 'magenta', 'white'],
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

colorify = createFormatter('cool.js')

console.log(colorify('log', 'hello world'))




logger = (name) => {
  let formater = createFormatter()
  return {
    log: (...args) => {
      let result = 
    },
    err: (...args) => {
    }
  }
}


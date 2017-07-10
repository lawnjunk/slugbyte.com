'use strict'

import './style/main.scss';

import React from 'react'
import faker from 'faker'
import ReactDOM from 'react-dom'
import {BrowserRouter, Router, Route} from 'react-router-dom'


class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <h1> This is a test </h1>
        <h2> beans </h2>
        <h3> beans </h3>
        <h4> beans </h4>
        <h5> beans </h5>
        <h6> beans </h6>

        <blockquote> {faker.lorem.sentences(1)} </blockquote> 

        <form>
          <input placeholder={faker.lorem.words(2)}/>
          <textarea ></textarea>
          <input type='submit' value='submit me' />
        </form>

        <button> click me </button>

        <p> 
          { faker.lorem.sentences(13) } 
          <strong>  hello from strong </strong>
          { faker.lorem.sentences(13) } 
          <em>  hello from em </em>
          { faker.lorem.sentences(13) } 
          <a>hello world</a>
          { faker.lorem.sentences(13) } 
        </p>
        <pre>{`throttle = (fn, ms) => {
  let ready = true;
  return (...args) => {
    if(ready){
      ready = false
      setTimeout(() => ready = true, ms)
      return fn(...args)
    }
  }
}`} </pre>


      </div>
    )
  }
}

const container = document.createElement('div')
document.body.appendChild(container)

ReactDOM.render(<App />, container)

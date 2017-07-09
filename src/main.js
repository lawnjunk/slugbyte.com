'use strict'

import React from 'react'
import {BrowserRouter, Router, Route} from 'react-router-dom'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <h1> cool </h1>
      </div>
    )
  }
}

const container = document.createElement('div')
document.body.appendChild(container)

ReactDOM.render(<App />, container)

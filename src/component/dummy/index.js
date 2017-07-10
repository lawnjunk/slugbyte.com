'use strict'

let React = require('react')

class Dummy extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    }

    this.countInc = this.countInc.bind(this)
  }

  countInc(){
    this.setState(state => ({ count: state.count + 1 }))
  }

  render(){
    return (
      <div>
        <h1 onClick={this.countInc}> cool beans </h1>
      </div>
    )
  }
}

module.exports = Dummy

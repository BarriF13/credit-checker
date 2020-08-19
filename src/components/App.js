import React, { Component } from 'react'
import  Wallet  from './Wallet'

export class App extends Component {
  render() {
    return (
      <div>
       <h2>Credit checker</h2>
       <hr/>
       <Wallet/>
      </div>
    )
  }
}

export default App;

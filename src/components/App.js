import React, { Component } from 'react';
import  Wallet  from './Wallet';
import  Credit  from './Credit';

export class App extends Component {
  render() {
    return (
      <div>
       <h2>Credit checker</h2>
       <hr/>
       <Wallet/>
       <hr/>
       <Credit />

      </div>
    )
  }
}

export default App;

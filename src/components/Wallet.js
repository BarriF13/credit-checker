import React, { Component } from 'react';
//connect comp to store with connect 
import {connect} from 'react-redux';

export class Wallet extends Component {
  render() {
    return (
      <div>
        <h3 className='balance'>Wallet balance: { this.props.balance }</h3>
        <br/>
        <input type="text" className="input-wallet"/>
      </div>
    )
  }
}

export default connect( state => {return {balance : state} },null )(Wallet);

import React, { Component } from 'react'
//connect comp to store with connect 
import {connect} from 'react-redux';

export class Wallet extends Component {
  render() {
    return (
      <div>
        <h3 className='balance'>wallet balance: { this.props.balance }</h3>
      </div>
    )
  }
}

export default connect( state =>{balance : state},null )(Wallet);

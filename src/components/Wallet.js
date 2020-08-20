import React, { Component } from 'react';
//connect comp to store with connect 
import {connect} from 'react-redux';
import {balance } from '../actions/balance'

export class Wallet extends Component {
  constructor(){
    super();
    this.state = { balance: undefined }
  }
  updateBalance = event => this.setState({ balance: parseInt(event.target.value, 10) })
  render() {
    return (
      <div>
        <h3 className='balance'>Wallet balance: { this.props.balance }</h3>
        <br/>
        <input className="input-wallet" onChange={this.updateBalance}/>
      </div>
    )
  }
}

export default connect( state => {return {balance : state} },null )(Wallet);

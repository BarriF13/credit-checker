import React, { Component } from 'react';
//connect comp to store with connect 
import {connect} from 'react-redux';
import {deposit , withdraw } from '../actions/balance'

export class Wallet extends Component {
  constructor(){
    super();
    this.state = { balance: undefined }
  }
  updateBalance = event => this.setState({ balance: parseInt(event.target.value, 10) })
  deposit = ()=> this.props.deposit(this.state.balance)
  render() {
    return (
      <div>
        <h3 className='balance'>Wallet balance: { this.props.balance }</h3>
        <br/>
        <input className="input-wallet" onChange={this.updateBalance}/>
        <button className="btn-deposit" onClick={this.deposit}>add deposit</button>
      </div>
    )
  }
}

export default connect( state => {return {balance : state} }, { deposit} )(Wallet);

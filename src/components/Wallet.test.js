import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React, { Component } from 'react';

import  { shallow } from 'enzyme';

import {Wallet} from './Wallet';


describe('Wallet', ()=>{
  const props = {balance: 20 };
  const wallet = shallow(<Wallet {...props}/>);

  it('renders porperly', () =>{
    expect(wallet).toMatchSnapshot();
  });

  it('displays the balance from props', ()=>{
    expect(wallet.find('.balance').text()).toEqual('wallet balance: 20')
  } )
});

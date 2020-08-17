import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React, { Component } from 'react';

import  { shallow } from 'enzyme';

import wallet from './wallet';

describe('wallet', ()=>{
  const wallet = shallow(<Wallet/>);

  it('renders porperly', () =>{
    expect(wallet).toMatchSnapshot();
  });
});

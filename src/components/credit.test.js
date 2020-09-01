import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React, { Component } from 'react';

import { shallow } from 'enzyme';
import { Credit } from './Credit'

describe('Credit', () => {
  const credit = shallow(<Credit />);
  it ('renders properly', ()=>{
    expect(credit).toMatchSnapshot();
  })
})
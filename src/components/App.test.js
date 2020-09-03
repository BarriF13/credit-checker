import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React, { Component } from 'react';

import  { shallow } from 'enzyme';
import App from './App'


describe( 'App', ()=>{
  const app = shallow(<App />);

  it('Renders properly' ,()=>{
    expect(app).toMatchSnapshot();
  })
  it('contains wallet component', ()=> { 

    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  });
  
  it('contains a connected credit comp', ()=> { 

    expect(app.find('Connect(Credit)').exists()).toBe(true);
  });

});


import React, { Component } from 'react';

import  { shallow } from 'enzyme';
import App from './App'


describe( 'App', ()=>{
  const app = shallow(<App />);

  it('Renders properly' ,()=>{
    expect(app).toMatchSnapshot();
  })
})

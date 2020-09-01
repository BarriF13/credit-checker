import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React, { Component } from 'react';

import { mount, shallow } from 'enzyme';
import { Credit } from './Credit'
import { mock } from 'fetch-mock';

describe('Credit', () => {
  const mockFetchBitcoin = jest.fn();
  const props = { balance:10, bitcoin: {} };
 let credit = shallow(<Credit {...props} />);
  it ('renders properly', ()=>{
    expect(credit).toMatchSnapshot();
  });

  describe('when mounted', ()=>{
    beforeEach(() => {
      props.fetchBitcoin =mockFetchBitcoin;
      credit = mount(<Credit {...props}/>)
    });

    it('dispatches the `fetchBitcoin()` method it receives from props',()=>{
      expect(mockFetchBitcoin).toHaveBeenCalled();
    })

  })
})

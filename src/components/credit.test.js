import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';

import { mount, shallow } from 'enzyme';
import { Credit } from './Credit'


describe('Credit', () => {
  
  const props = { balance:10, bitcoin: {} };
  let credit = shallow(<Credit {...props} />);

  it ('renders properly', ()=>{
    expect(credit).toMatchSnapshot();
  });

  describe('when mounted', ()=>{
    const mockFetchBitcoin = jest.fn();
    beforeEach(() => {
      props.fetchBitcoin = mockFetchBitcoin;
      credit = mount(<Credit {...props}/>)
    });

    it('dispatches the `fetchBitcoin()` method it receives from props',()=> {
      expect(mockFetchBitcoin).toHaveBeenCalled();
    });
  });

  describe('when there are valid bitcoin props' , ()=>{
    beforeEach(()=>{
      props = { balance: 10, bitcoin: {bpi: { USD: { rate: '1,000' } } } };
      loot = shallow(<Loot {...props}/>)
    })
  });
  it ('displays the correct bitcoin value' , ()=>{
    expect(loot.find('h3').text() ).toEqual('Bitcoin balance: 0.01');
  }); 
});

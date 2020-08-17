import balanceReducer from './balance'; 
import * as constants from '../actions/constants';

// testing balance reducer --going to change the balance 
describe('balanceReducer', () =>{
  it('sets a balance', () =>{
    const balance =10;

    expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance}))
    .toEqual(balance)
  }); 
});
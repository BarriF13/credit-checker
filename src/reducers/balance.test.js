import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';

// testing balance reducer --going to change the balance 
describe('balanceReducer', () => {
  describe('when initializing ' , ()=>{
    const balance = 10;

    it('sets a balance', () => {
      expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance }))
        .toEqual(balance)
    });
    //cookie test
    describe('then re-initializing', () => {
      it('reads the balance form cookies', () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance);
  
      });
    });
  

  })

  it('accept a deposits into balance ', () => {
    const deposit = 10;
    const initialState = 5;
    expect(balanceReducer(initialState, { type: constants.DEPOSIT, deposit })).toEqual(initialState + deposit);
  });

  it('withdraws from the balance ', () => {
    const withdraw = 10;
    const initialState = 15;

    expect(balanceReducer(initialState, { type: constants.WITHDRAW, withdraw })).toEqual(initialState - withdraw);
  })
});
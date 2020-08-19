// balance module : action creator
import * as constants from './constants';

//Making an action creator 
export const setBalance = balance =>{
  return {
    type: constants.SET_BALANCE,
    balance 
  }
} 

export const deposit = deposit =>{
  return {
    type: constants.DEPOSIT,
    deposit
  }
}
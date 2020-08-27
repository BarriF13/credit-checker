//https://api.coindesk.com/v1/bpi/currentprice.json

// we need to make a fake a redux store for context of the test 
import configureMockStore from 'redux-mock-store';

//to work with async behavior we need to use middleware that works with actions that are not objects --here we might have to work with promise, this is when the middleware comes in , they allow us to return something that is not plain objects, like a function or promise --middleware we use here is thunk
import thunk from 'redux-thunk';
//using mock version of fetch for testing 
import fetchMock from 'fetch-mock';
//actions
import { FETCH_BITCOIN} from './constants';
import { fetchBitcoin } from './bitcoin';

//creating the mock store 
const createMockStore = configureMockStore([thunk]);

const store = createMockStore({ bitcoin: {} });
//just testing the fetch works 
const mockResponse = { body: { bpi: 'bitcoin price index' }};

//stobbing 
fetchMock.get('https://api.coindesk.com/v1/bpi/currentprice.json',mockResponse );

// now we are making the test

it (' create an async action to fetch the bitcoin value', ()=>{
  const expectedActions = [{ bitcoin: mockResponse.body, type: FETCH_BITCOIN }];

  return store.dispatch( fetchBitcoin()).then(() =>{
  expect( store.getActions()).toEqual(expectedActions);
  });
});
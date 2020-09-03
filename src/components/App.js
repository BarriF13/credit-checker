import React from 'react';
import  Wallet  from './Wallet';
import  Credit  from './Credit';

const App =()=> {
 
    return (
      <div>
       <h2>Credit checker</h2>
       <hr/>
       <Wallet/>
       <hr/>
       <Credit />
       <div><p>Powered by <a target='_blank' href="http://www.coindesk.com/price">Coindesk</a></p></div>
      </div>
    )
  }

export default App;

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
      </div>
    )
  }

export default App;

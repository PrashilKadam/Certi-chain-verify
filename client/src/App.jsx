import { useState } from 'react'
import './App.css'
import Wallet from './Components/Wallet/Wallet';
import Display from './Components/Display/Display';

function App() {
  const [state, setState] = useState({
    web3:null,
    contract:null
  });

  function saveState(state){
    setState(state);
  }

  return (
    <>
      <div>
        <Wallet saveState={saveState}/>
        <Display state={state}/>
      </div>
    </>
  )
}

export default App

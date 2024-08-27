import { useState } from 'react'
import ABI from "./ABI.json";
import Web3 from "web3";

function Wallet({saveState}){
    const[connected, setConnected] = useState(false);

    async function init(){
        try {
           const web3 = new Web3(window.ethereum); //use to inject metamask
           await window.ethereum.request({method:'eth_requestAccounts'}); //use to open metamask
           const contract = new web3.eth.Contract( // contract instance generation
            ABI, //contract ABI
            // "0x4FCE2179C0bCd963aAA2C5697A5C49523C36E0e8" //contract address
            "0x43EF2d9cc71Ea93911474Fcf75c8B1CF22A8Fb85" //contract address
           );
        //    console.log(contract);
            setConnected(true);
            saveState({web3:web3,contract:contract});
        } catch (error) {
            alert("please install Metamask");
            console.log(error);
        }
    }

    return(
        <>
            <div>
                <button onClick={init}>{connected? "Connected":" Connect Metamask"}</button>
            </div>
        </>
    )
}

export default Wallet;
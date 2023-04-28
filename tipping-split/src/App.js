import './App.css';
import Bill from "./Components/Bill";
import Tip from "./Components/Tip";
import People from "./Components/People";
import Display from "./Components/Display";
import {useState} from "react";

function App() {

  const [billTotal, setBillTotal] = useState("")
  const [tipPercent, setTipPercent] = useState("")
  const [numPeople, setNumPeople] = useState("")

  const getBillTotal = (value) => {
    if (value < 0 ) {
      return 'error'
    }
    setBillTotal(value)
  }

  const getTipPercent = (value) => {
    setTipPercent(value)
  }

  const getNumPeople = (value) => {
    setNumPeople(value)
  }

  return (
    <main>
    <div className="input">
    <Bill
        billTotal={billTotal}
        getBillTotal={getBillTotal}/>
    <Tip
        tipPercent={tipPercent}
        getTipPercent={getTipPercent}/>
    <People
        numPeople={numPeople}
        getNumPeople={getNumPeople}/>
    </div>
    <Display
        billTotal={billTotal}
        tipPercent={tipPercent}
        numPeople={numPeople}
        getBillTotal={getBillTotal}
        getTipPercent={getTipPercent}
        getNumPeople={getNumPeople}/>
    </main>
  );
}

export default App;

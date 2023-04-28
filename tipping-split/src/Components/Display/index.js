import Reset from "../Reset";
import React from "react";

const Display = ({billTotal, tipPercent, numPeople, getTipPercent, getNumPeople, getBillTotal}) => {

    const billFloat = parseFloat(billTotal)
    const tipFloat = parseFloat(tipPercent)
    const peopleFloat = parseFloat(numPeople)

    const calculateTipPerPerson = (bill, tip, people) => {
        return ((bill * (tip/100))/people).toFixed(2)
    }

    const calculateTotalPerPerson = (bill, tip, people) => {
        return ((bill + (bill * (tip/100)))/people).toFixed(2)
    }
    if (billTotal !== '' && numPeople !== '')  {
        return (
            <div className="display">
                <p>Total owed per person: £{calculateTotalPerPerson(billFloat, tipFloat, peopleFloat)}</p>
                <p>Which includes a £{calculateTipPerPerson(billFloat, tipFloat, peopleFloat)} tip</p>
            </div>)
    }
    return (
        <div className="display">
            Complete the form.
            <Reset getBillTotal={getBillTotal}
                   getTipPercent={getTipPercent}
                   getNumPeople={getNumPeople}/>
        </div>
    )
}

export default Display
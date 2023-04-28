import {useState} from "react";

const AnyChanges = ({billTotal, getBillTotal}) => {

    const [changes, setChanges] = useState("")
    const changeBill = (billTotal) => {
        getBillTotal(parseFloat(billTotal)-changes)
    }

    return (
        <div className="anyChanges">
            <div>Any changes?</div>
            <input name="remove" onChange={e =>
                setChanges(e.target.value)} value={changes} placeholder="remove from bill"/>
            <button onClick={() => {changeBill(billTotal)}}>Remove anything from the bill?</button>
        </div>
    )
}

export default AnyChanges
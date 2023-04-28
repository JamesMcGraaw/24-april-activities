import './styles.css'
const Bill = ({billTotal, getBillTotal}) => {
    return (
        <div className="bill">
            <h1>Bill calculator:</h1>
                £ <input name="bill" onChange={e =>
                getBillTotal(e.target.value)} value={billTotal} placeholder="Enter Bill Total"/>
        </div>
    )
}

export default Bill
const Bill = ({billTotal, getBillTotal}) => {
    return (
        <div className="bill">
            <h1>Bill total:</h1>
            <label>
                £ <input name="bill" onChange={e =>
                getBillTotal(e.target.value)} value={billTotal} placeholder="Enter Bill Total"/>
            </label>
        </div>
    )
}

export default Bill
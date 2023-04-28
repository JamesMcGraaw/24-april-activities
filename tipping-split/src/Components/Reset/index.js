const Reset = ({getBillTotal, getNumPeople, getTipPercent}) => {

    const reset = () => {
        getTipPercent('')
        getNumPeople('')
        getBillTotal('')
    }


    return (
        <div className="reset">
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Reset
import {useEffect, useState} from "react";

const Bitcoin = () => {

    const [BTCprice, setBTCprice] = useState(0)
    const freddoPerGBP = 4

    const getBTCprice = () => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice/gbp.json')
            .then(res => res.json())
            .then(data => {
                setBTCprice(data.bpi.GBP.rate_float)
            })
    }

    const BTCtoFreddo = (currentPrice, freddoPerGBP) => {
        return currentPrice * freddoPerGBP
    }

    useEffect(() => {
        getBTCprice()
        const timer = setInterval(getBTCprice, 30000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <>
            <p>Current BTC price: £{BTCprice}</p>
            <p>Which is {BTCtoFreddo(BTCprice, freddoPerGBP)} freddos.</p>
        </>
    )
}

export default Bitcoin

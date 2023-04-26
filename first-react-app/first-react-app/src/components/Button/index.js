import {useEffect, useState} from "react";

const Button = () => {

    const [clickCounter, setclickCounter] = useState(0)
   const handleClick = () => {
       setclickCounter(clickCounter + 1)
       return console.log(clickCounter)
   }

   useEffect(() => {
       console.log('Use effect ran')
   }, [clickCounter])

    return (
        <>
            <button onClick={handleClick}>Click me</button>
            <p>I have been clicked {clickCounter} times</p>
        </>
    )
}

export default Button
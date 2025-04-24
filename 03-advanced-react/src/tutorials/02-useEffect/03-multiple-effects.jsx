import { useState, useEffect } from "react";

const MultpipleEffects = () => {
    const [value, setValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);
useEffect(() => {
    console.log("Hello World");
}, [value])

useEffect(() => {
    console.log("Value Changed");
}, [secondValue])

    return (
        <div>
            <h1>value: {value}</h1>
            <button className="btn" onClick={() => setValue(value +1)}>Value</button>
            <h1>secondValue: {secondValue}</h1>
            <button className="btn" onClick={() => setSecondValue(secondValue +1)}>Second Value</button>
        </div>
    )
}

export default MultpipleEffects;
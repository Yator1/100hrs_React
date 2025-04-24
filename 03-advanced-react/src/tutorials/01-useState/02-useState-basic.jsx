import { useState } from "react";

const UseStateBasics = () => {
    // console.log(useState('hello'))
    // const value = useState('hello')[0];
    // const func = useState('hello')[1];
    // console.log(func);
    // console.log(value);

    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
        // console.log(count);
    }

    return (
        <div>
            <h4>You clicked {count} times</h4>
            <button type="button" className="btn" onClick={handleClick}>Click Me</button>
            </div>
    )
};

export default UseStateBasics;
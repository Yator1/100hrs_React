import { useState } from "react";

const UseStateGotcha = () => {
    const [value, setValue] = useState(0);

    const handleClick = () => {
        // setTimeout(() => {
            
        // }, 3000);
        setValue((prevValue) => {
          console.log(prevValue + 1);
          return prevValue + 1;
        });        
    }
    return (
      <>
        <h1>{value}</h1>
        <button type="button" className="btn" onClick={handleClick}>
          Increase
        </button>
      </>
    );};

export default UseStateGotcha;
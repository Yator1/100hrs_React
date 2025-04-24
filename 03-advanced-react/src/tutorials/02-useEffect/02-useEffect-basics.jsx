import { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log("hello world");
  };
  sayHello();

  useEffect(() => {
    console.log("useEffect");    
  }, []);
  return (
    <>
      <h1>value: {value} </h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        +1
      </button>
    </>
  );
};

export default UseEffectBasics;

import { useState } from "react";

const CodeExample = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log("hello world");
  };
  sayHello();
  return (
    <>
      <h1>value: {value} </h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        +1
      </button>
    </>
  );
};

export default CodeExample;

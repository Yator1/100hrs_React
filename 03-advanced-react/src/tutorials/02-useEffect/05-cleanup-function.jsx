import { useEffect, useState } from "react";

const CleanupFunction = () => {

    const [toggle, setToggle] = useState(false)
    console.log("render component");
    
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        {toggle ? "Unmount" : "Mount"}
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
    useEffect(() => {
        // console.log("I am a random effect");
        const intId = setInterval(() => {
            console.log("hello world");
        }, 1000);
        return () => {
            clearInterval(intId);
            console.log("cleanup");
        };
    }, []);
    return <h1>Random Component</h1>;
}
export default CleanupFunction;

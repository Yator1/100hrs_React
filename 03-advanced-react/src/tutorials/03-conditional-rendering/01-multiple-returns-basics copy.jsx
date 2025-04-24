import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
    const [isloaded, setIsLoaded] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(false);
        }, 6000);
    }, []);

    if (isloaded) {
        return <h2>Loading...</h2>
    }
    return <h2>Multiple returns Basics</h2>
}

export default MultipleReturnsBasics;
import { useState } from "react";

const UseStateObject = () => {
    const [person, setPerson ] = useState({
        name: 'peter',
        age: 24,
        hobby: 'playing guitar'
    })

    const displayPerson = () => {
        // setPerson({
        //     name: 'john',
        //     age: 26,
        //     hobby: 'playing piano'
        // })
        setPerson({...person, name: 'susan'});
    };
    return (
    <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h4>Enjoys: {person.hobby}</h4>
    <button className='btn' onClick={displayPerson}>Show John</button>
    </>
    )
}

export default UseStateObject;
import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
// import { useState } from 'react'

function SingleQuestion({ id, title, info, activeId, toggleQuestion}) {
    // const [showAnswer, setShowAnswer] = useState(false)
    const isActive = id ===activeId;
  return (
    <article className='question'>
        <header>
            <h5>{title}</h5>
            <button className="question-btn" onClick={() => toggleQuestion(id)}>
                {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
        </header>
        {isActive && <p>{info}</p>}
    </article>
  )
}

export default SingleQuestion
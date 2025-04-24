import { useState } from 'react'

const ShortCircuitOverview = () => {
    const [text, setText] = useState('')
    const [name, setName] = useState('john doe')
  return (
    <div>
        <h1>Short Circuit Overview</h1>
        <h4>Falsy or : {text || 'hello world'}</h4>
        <h4>Falsy and : {text && 'hello world'}</h4>
        <h4>Truthy or : {name || 'hello world'}</h4>
        <h4>Truthy and : {name && 'hello world'}</h4>
    </div>
  )
}

export default ShortCircuitOverview
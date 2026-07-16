import React, { useState } from 'react'

const Day2CounterApp = () => {
  const [count, setCount] = useState(0)
  return (
    <>
    <h1>{count}</h1>
    <button onClick={() => setCount(count +1)}>Increment</button><br/>
    <button onClick={() => setCount(0)}>Reset</button><br/>
    <button onClick={() => setCount(count-1)}>Decrement</button><br/>
    </>
  )
}

export default Day2CounterApp
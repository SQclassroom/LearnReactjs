import React from 'react'
import { useState } from 'react';

const Datahook = () => {

  const[count,setCount]  = useState(0);

  const handleClickadd = () => {
    setCount(count+1);
  }

  const handleClickremove = () => {
    setCount(count-1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClickadd}>Increment</button>
      <button onClick={handleClickremove}>Decrement</button>
    </div>
  )
}

export default Datahook;
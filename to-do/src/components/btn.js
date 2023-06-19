import React from 'react'

const Btn = () => {

  function handleClick(){
    console.log("Hello");
  }

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Btn
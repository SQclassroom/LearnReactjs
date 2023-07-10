import React from 'react'
import {useState , useEffect} from 'react';

const Timer = () => {

    const [count , setCount] = useState(1)

    useEffect (() =>{
        setTimeout(() => {
            setCount (count+1)
        } , 10000)
    })
  return (
    <div>
      I have renderd {count} times!
    </div>
  )
}

export default Timer

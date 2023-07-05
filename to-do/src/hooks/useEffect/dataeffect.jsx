import React from 'react';
import { useEffect, useState } from 'react';

const Dataeffect = () => {

  useEffect(() => {
// code to run after render or update
  },[])



const [clicked,setClicked] = useState();

useEffect(() => {
  alert('WE ARE USE EFFECT');
});

  return (
    <div>
      <button onClick={() => setClicked('Subscribe')}>Subscribe</button>
      <br/>
      <hr/>
      <button onClick={() => setClicked('To')}>To</button>
      <br/>
      <hr/>
      <button onClick={() => setClicked('DropOut')}>DropOut</button>
      <h1>{clicked}</h1>
    </div>
  )
}

export default Dataeffect;
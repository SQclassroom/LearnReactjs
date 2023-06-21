import React from 'react'


const Button = ({message , name , onPlay , onPause}) => {
  let playing = false;
  function handleClick(){
    if(playing) onPause()
    else onPlay();
    playing = !playing;
  }

  return (
    <div>
      <button onClick={handleClick}>{name}</button>
    </div>
  )
}

export default Button
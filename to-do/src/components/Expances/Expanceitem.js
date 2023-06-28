import React from 'react'
import ExpanceData from './ExpanceData'

const Expanceitem = (props) => {

  
  return (
    <>
    <div className='flex bg-slate-300 p-4 w-1/2 justify-between items-center rounded-full mb-3'>
        <ExpanceData date={props.date}/>
        <div className='flex w-96 justify-around items-center'>
          <h2 className='text-xl text-white font-bold'>{props.title}</h2>
          <div className='text-md font-bold py-2 border-2 border-red-400 rounded-full w-24 text-center'>{props.amount}</div>
        </div>
    </div>
    </>
  )
}

export default Expanceitem
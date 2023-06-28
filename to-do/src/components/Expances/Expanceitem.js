import React from 'react'
import ExpanceData from './ExpanceData'

const Expanceitem = (props) => {

  
  return (
    <>
    <h1 className='text-start text-2xl text-black font-bold'>Let's Add Expance</h1>
    <div className='flex bg-slate-300 p-4 w-1/2 justify-between items-center rounded-full'>
        <ExpanceData date={props.date}/>
        <div className='flex w-96 justify-around items-center'>
          <h2 className='text-xl text-white font-bold'>{props.title}</h2>
          <div className='text-md font-bold p-2 border-2 border-red-400 rounded-full w-24 text-center'>{props.amount}</div>
        </div>
    </div>
    </>
  )
}

export default Expanceitem
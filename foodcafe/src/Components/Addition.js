import React, { useState } from 'react'

const Addition = () => {
    const[digit,setdigit]=useState(0);
    const[digit1,setdigit1]=useState(0);
    const[ans,setans]=useState(0);
  return (
    <div className='text-center my-4'>
      <input type='number' className='text-sm text-slate-500' onClick={(e)=>setdigit(e.target.value)}/>
      <input type='number' onClick={(e)=>setdigit1(e.target.value)}/>
      <br></br>
      <button className='p-2 mx-3 bg-blue-500' onClick={()=>{setans(parseFloat(digit)+parseFloat(digit1))}}>Addition</button>
      <button className='p-2 mx-3 bg-blue-500' onClick={()=>{setans(digit-digit1)}}>Subtraction</button>
      <button className='p-2 mx-3 bg-blue-500' onClick={()=>{setans(digit*digit1)}}>Muliplilcation</button>
      <button className='p-2 mx-3 bg-blue-500' onClick={()=>{setans(digit/digit1)}}>division</button>
      <h1 className='text-orange-700 text-3xl'>{ans}</h1>
    </div>
   
  )
}

export default Addition

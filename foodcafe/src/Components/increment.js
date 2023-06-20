import React, { useEffect, useState } from 'react'

const Increment = () => {

    const [no,setno]=useState(0);
    useEffect(()=>{
       document.title= `No{${no}}`;
        
       },)
  return (
    <div className='text-center'>
        <h1 className='text-orange-700 text-3xl'>{no}</h1>
      <button className='p-2 mx-3 bg-blue-500' onClick={()=>{setno(no+1)}}>Increment</button>
      <button className='p-2 mx-3 bg-blue-500' onClick={()=>{(no>0)?setno(no-1):setno(0)}}>decrement</button>
    </div>
  )
}

export default Increment

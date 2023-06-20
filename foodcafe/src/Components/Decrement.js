import React, { useReducer } from 'react'

const Decrement = () => {
    const reducer=(state, action)=>{
if(action.type=='inc'){
    state=state+1;
}
if(state > 0 && action.type=='dec'){
    state=state-1;
}
return state;
    }
    const no=0;
    const[state,dispatch]=useReducer(reducer,no);
  return (
    <>
       <div className='text-center'>
        <h1 className='text-orange-700 text-3xl'>{state}</h1>
      <button className='p-2 mx-3 bg-blue-500' onClick={()=>{ dispatch({ type: 'inc' })}}>Increment</button>
      <button className='p-2 mx-3 bg-blue-500' onClick={()=>{ dispatch({ type: 'dec' })}}>decrement</button>
    </div>
    </>
  )
}

export default Decrement

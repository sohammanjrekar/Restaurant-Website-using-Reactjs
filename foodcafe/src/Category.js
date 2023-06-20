import React from 'react'
import Menu from './menuapi'

const Category = ({data,Menu,setdata}) => {
   
    const filter = (category) => {
        const updatelist = Menu.filter((curelm) => {
          return curelm.category == category;
        });
        setdata(updatelist);
      };
  return (
    <>
    {data.map((curelm)=>{
        return(
            
                 <a
                 href="#home"
                 class="block lg:inline-block text-md font-bold  text-orange-500  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                onClick={()=>filter(curelm)}
               >
                 {curelm}
               </a>
              
               
        )
    })}
    </>
  )
}

export default Category

import React from 'react' 
import { ContextData } from './Context';
import { useContext } from 'react';

const Aside = () => {

let {cartData,setCartData,button,setButton} = useContext(ContextData);

  return (
    <aside className='bg-slate-800 w-[10.3rem] md:w-96 h-fit text-zinc-300 font-semibold text-xs md:text-base ml-1 md:pl-12 mt-2 rounded-md md:rounded-3xl'>
        <ul className='grid gap-7 md:gap-10 pl-[.49rem]'>

        <li  className='text-xl md:text-3xl mt-3 md:mt-7'>Filter Products</li>
       <li> <input type="radio" name="action" id="Ascending" onClick={(e)=>{if(e.target.checked){setButton({...button,Ascending:true,Descending:false})}}} /> <label htmlFor="Ascending">Ascending</label></li>
       <li> <input type="radio" name="action" id="descending" onClick={(e)=>{if(e.target.checked){setButton({...button,Descending:true,Ascending:false})}}} /> <label htmlFor="descending">Descending</label></li>
       <li> <input type="checkbox" name="SecondAction" id="stock" onClick={(e)=>{
        if(e.target.checked)
        {
        setButton({...button,Stock:true})
        }else{
        setButton({...button,Stock:false})
        }
        }} /> <label htmlFor="stock">Include Out Of Stock</label></li>
       <li> <input type="checkbox" name="SecondAction" id="delivery" onClick={(e)=>{
        if(e.target.checked)
        {
          setButton({...button,Delivery:true})
        }
        else{
          setButton({...button,Delivery:false})
        }
       }} /> <label htmlFor="delivery">Fast Delivery Only</label></li>
       <li><button className='bg-white text-slate-700 text-xl md:text-2xl px-6 md:px-16 py-2 md:py-3 rounded-md md:rounded-full font-bold mb-4 mt-5 mr-[.20rem]' onClick={()=>{
        setButton({...button,Ascending:false,Descending:false,Delivery:false,Stock:false},
          document.querySelector("#Ascending").checked=false,
          document.querySelector("#descending").checked=false,
          document.querySelector("#stock").checked=false,
          document.querySelector("#delivery").checked=false,
        )}}>Clear Filter</button></li>
        </ul>

    </aside>
  )
}

export default Aside
import React, { useContext } from 'react'
import cart from "./assets/cart.png"
import down from "./assets/down.png"
import { ContextData } from './Context'

const Header = () => {
 let {cartData,setCartData,button,setButton} = useContext(ContextData);
  return (
    <header className="bg-slate-800 h-20  flex  justify-between  px-5 md:px-14 items-center rounded-md md:rounded-none">

    <span className="text-3xl font-extrabold text-slate-200 md:flex">
    EKart 
      </span>

    <input  placeholder="Enter ProductName" className="md:pl-5 hidden md:block w-[28rem] h-10 rounded-full mr-96" type="text" onChange={(e)=>{let dataInput=e.target.value;let searchInput=dataInput.charAt(0).toUpperCase()+dataInput.slice(1);setButton({...button,SearchBar:searchInput})}}/>

    <button className="border-2  w-24 h-10 flex justify-center items-center rounded-md" onClick={()=>setButton({...button,CartClick:!(button.CartClick)})}>
       <img className={`h-8 `} src={cart} alt="" />
       <span className="text-white font-semibold text-xs ml-0.5 mr-2">{cartData.length}</span>
      <img className="w-3" src={down} alt="" />
           </button>
</header>
  )
}

export default Header
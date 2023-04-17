import {faker} from "@faker-js/faker";
import Header from "./Header";
import Aside from "./Aside";
import Arrow from "./assets/Arrow.png"
import {ContextData} from "./Context"
import { useContext } from "react";
import Trash from "./assets/trash.svg"

const data = [];
faker.seed(123)

for(let i=0;i<20;i++)
{
 let dataObject={
  name:faker.commerce.productName(),
  price:faker.commerce.price(),
  image:faker.image.food(200,200,true),
  stock:Math.floor(Math.random()*3+1),
  delivery:Math.floor(Math.random()*3+1),
  id:i
 }
 data.push(dataObject);
}
const Home = () => {
 
const {cartData,setCartData,button} = useContext(ContextData);
let DefaultArray=data.filter(i=>i.stock>1);
let displayData;
if(button.Ascending==true)
{
  if(button.Stock==true)
  {
    if(button.Delivery==true)
    {
      displayData=data.filter(i=>i.delivery<2).sort((i,j)=>i.price-j.price)
    }
    else{

      displayData=data.sort((i,j)=>i.price-j.price);
    }
  }
  else if(button.Delivery==true)
  {
    displayData=DefaultArray.filter(i=>i.delivery<2).sort((i,j)=>i.price-j.price);
  }
  else{

    displayData=DefaultArray.sort((i,j)=>i.price-j.price)
  }
}
else if(button.Descending==true)
{
  if(button.Stock==true)
  {
    if(button.Delivery==true)
    {
      displayData=data.filter(i=>i.delivery<2).sort((i,j)=>j.price-i.price)
    }else{

      displayData= data.sort((i,j)=>j.price-i.price)
    }
  }
  else if(button.Delivery==true){

    displayData = DefaultArray.filter(i=>i.delivery<2).sort((i,j)=>j.price-i.price);
  }
  
  else{
    displayData=DefaultArray.sort((i,j)=>j.price-i.price)
  }}
else if(button.Stock==true)
{
  if(button.Delivery==true)
  {
    displayData=data.filter(i=>i.delivery<2);
  }
  else{

    displayData=data;
  }
  }
else if(button.Delivery==true)
{
  if(button.Stock==true)
  {

    displayData=data.filter(i=>i.delivery<2)
  }
  else{

    displayData=DefaultArray.filter(i=>i.delivery<2);
  }
}

else{
  displayData=DefaultArray;

}

  
  return (
    <div>
       
      <Header/>
     <ul className={`${button.CartClick==true ?"block visible absolute right-2 md:right-12 top-16 md:px-4 bg-slate-100 min-h-fit max-h-[30rem] overflow-scroll w-[22rem] md:w-[28rem] z-10 rounded-3xl": " none hidden"}`}>
     {
      cartData.map((j)=>{
        return(
          
          <li key={j.id} id={j.id} className={`flex justify-between items-center mx-2 my-5 `}>
            <img className="outline-offset-4 outline-4 outline-double outline-emerald-700  rounded-full w-20" src={j.image} alt="" />
         <span className="grid">
           <span className="text-gray-900 font-medium">{j.name}</span>
          <span className="text-gray-600 font-semibold">{j.price}</span>
          </span>
          <img className="w-6" src={Trash} alt="Trash" onClick={(e)=>{
            setCartData(cartData.filter(i=>i.id !== j.id));
            document.querySelector(`#O${e.target.parentElement.id}`).style.backgroundColor="green";
              document.querySelector(`#O${e.target.parentElement.id}`).disabled=false;
              document.querySelector(`#O${e.target.parentElement.id}`).textContent="Place Order";

          }} />
          
          </li>
          
        )
      })
     } 
   
      {
        cartData.length==0 && <span className="text-2xl font-semibold pl-8 text-slate-900">Cart Is Empty !!!</span>
      }
     
     </ul>
            
     <Aside/>
     <main className="absolute top-20 left-40 w-fit h-fit  text-center ml-4 mt-2">
      <ul className="grid gap-3 md:gap-6 md:grid-cols-4 md:ml-60">
        {
          displayData.map(i=>{
            return(
            
              <li key={i.id} id={i.id} className="grid border-black border-2 rounded-md "><img className="rounded-md ml-[.20rem] mt-[.20rem]" src={i.image} alt="" />
              
              <span className="font-semibold text-gray-800 ">{i.name}</span>
              <span className="font-bold text-zinc-700 ">{i.price}</span>
              <span className="text-neutral-800 font-semibold">
              {
                i.delivery>1 ?"4 Days Delivery" : "Fast delivery"
              }
              </span>
              {i.stock>1 ?
                <button id={`O${i.id}`} onClick={(e)=>{e.target.disabled=true,e.target.style.backgroundColor="grey",e.target.textContent="Go To Cart",setCartData([...cartData,data[e.target.parentElement.getAttribute("id")]]) }} style={{backgroundColor:"green"}} className={` w-fit mx-auto px-4 rounded-md text-zinc-300 py-1 font-semibold mb-[.20rem] `}>Place Order</button>:
                <button disabled className="bg-blue-500 w-fit mx-auto px-4 rounded-md text-zinc-300 py-1 font-semibold mb-[.20rem]">Out Of Stock</button>
              
            }
           
            
            
            </li>
              )
          })
        }
      </ul>
        
        </main>
       { button.SearchBar.length>0 && <ul className="SearchBar hidden md:block md:absolute top-[3.7rem] left-[13.3rem] pl-5 overflow-scroll text-xl text-slate-500 font-semibold pt-2 max-h-fit bg-white w-[28rem] z-10 rounded-3xl">
         {
          button.SearchBar.length>0 &&
 data.filter(i=>i.name.includes(button.SearchBar)).map((i,j)=>{
  return(
    
    <li key={j}>{i.name}</li> 
  )
 })}
      
        </ul>
}
        <aside className="fixed bottom-10 md:bottom-5 left-10 md:left-10" onClick={(e)=>{
            document.documentElement.scrollTop = 0;
          
        }}>
          <img className="w-14 bg-slate-600 rounded-full" src={Arrow} alt=""  />
        </aside>
    </div>
  )
}

export default Home
import { createContext, useState } from "react";


export const ContextData = createContext();




const Context = ({children}) => {
    const [cartData,setCartData] = useState([]);
    const [button,setButton]=useState({Ascending:false,
                                        Descending:false,
                                        Stock:false,
                                      Delivery:false,
                                      CartClick:false,
                                     SearchBar:''})

  return (
    <ContextData.Provider value={{cartData,setCartData,button,setButton}}>
        {children}
    </ContextData.Provider>
  )
}

export default Context;
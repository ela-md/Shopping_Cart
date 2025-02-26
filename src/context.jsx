import { createContext, useState, useEffect } from "react";


export const AppContext = createContext()

 const AppProvider = ({children}) => {
  
    const [addedToCart, setAddedToCart] = useState(0);
    const [addedProducts, setAddedProducts] = useState([]);
 

   const contextValue = {addedToCart, setAddedToCart, addedProducts, setAddedProducts}
    return(
        <AppContext.Provider value={contextValue}>  
          {children}
        </AppContext.Provider>
    )
}

export default AppProvider

import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext()

export const AppProvider = ({children}) => {
  
    const [addedToCart, setAddedToCart] = useState(0);
    const [addedProducts, setAddedProducts] = useState([])
    const contextValue = {addedToCart, setAddedToCart, addedProducts, setAddedProducts};

    return(
        <AppContext.Provider value={{contextValue}}>  
          {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext);

import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const BalanceProvider = ({children}) => {

    const [currentValue, setCurrentValue] = useState({});
    const toggleCurrentValue = (response) => {
        setCurrentValue(response)
    }

    return(
        <ThemeContext.Provider value={{currentValue, setCurrentValue}}>
            {children}
        </ThemeContext.Provider>
    )
}

import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const BalanceProvider = ({children}) => {

    const [currentValue, setCurrentValue] = useState(0);

    return(
        <ThemeContext.Provider value={{currentValue, setCurrentValue}}>
            {children}
        </ThemeContext.Provider>
    )
}

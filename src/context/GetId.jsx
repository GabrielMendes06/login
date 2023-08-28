import { createContext, useState } from "react";

export const GetId= createContext();
export const GetIdProvider = ({children}) => {

    const [id, setId] = useState({});
    
    const toggleId = (response) => {
        setId(response)
    }

    return(
        <GetId.Provider value={{id, toggleId}}>
            {children}
        </GetId.Provider>
    )
}
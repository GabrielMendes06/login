import { createContext, useState } from "react";

export const TransferValueModal = createContext();
export const TransferValueProvider = ({children}) => {

    const [openTransferValue, setOpenTransferValue] = useState(false);
    const setTransferModalValue = () => setOpenTransferValue(!openTransferValue)

    return(
        <TransferValueModal.Provider value={{openTransferValue, setTransferModalValue}}>
            {children}
        </TransferValueModal.Provider>
    )
}
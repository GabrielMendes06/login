import { createContext, useState } from "react";

export const OpenTransferModal = createContext();
export const ModalTransferProvider = ({children}) => {

    const [openTransferModal, setOpenTransferModal] = useState(false);
    const setTransferModalOpen = () => setOpenTransferModal(!openTransferModal)

    return(
        <OpenTransferModal.Provider value={{openTransferModal, setTransferModalOpen}}>
            {children}
        </OpenTransferModal.Provider>
    )
}
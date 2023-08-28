import { createContext, useState } from "react";

export const OpenModal = createContext();
export const ModalProvider = ({children}) => {

    const [openModal, setOpenModal] = useState(false);
    const setModalOpen = () => setOpenModal(!openModal)

    return(
        <OpenModal.Provider value={{openModal, setModalOpen}}>
            {children}
        </OpenModal.Provider>
    )
}
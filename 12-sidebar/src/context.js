import { createContext, useContext, useState } from "react"

export const GlobalContext = createContext();
const ContextProvider = ({ children }) => {
    const [showSidebar, setShow] = useState(false);
    const [showModel, setModel] = useState(false);

    const openSidebar = () => {
        setShow(true);
    }
    const closeSidebar = () => {
        setShow(false);
    }
    const openModel = () => {
        setModel(true);
    }
    const closeModel = () => {
        setModel(false);
    }
    return (
        <GlobalContext.Provider value={{ showModel, showSidebar, openSidebar, closeSidebar, openModel, closeModel }}>
            {children}
        </GlobalContext.Provider>
    )
}
export const useCustomContext = () => {
    return (
        useContext(GlobalContext)
    )
}
export default ContextProvider;
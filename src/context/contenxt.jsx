/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const Context = createContext();

export const NewContext = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error("NewContext debe estar dentro del ContextProvider");
    } else {
        return context;
    }
}

export const ContextProvider = ({ children }) => {
    const [Delete,setDelete] = useState(false);
    const [rowSelectedDelete,setRowSelectedDelete] = useState(false);
    const [id,setId] = useState([]);
    
    return (
        <Context.Provider value={{
            Delete,
            setDelete,
            rowSelectedDelete,
            setRowSelectedDelete,
            id,
            setId  
        }}>
            {children}
        </Context.Provider>
    )
}
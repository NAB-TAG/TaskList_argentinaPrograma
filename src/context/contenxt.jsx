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

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
    const [Delete,setDelete] = useState(false);
    const [rowSelectedDelete,setRowSelectedDelete] = useState(false);
    const [id,setId] = useState([]);
    const [Task, setTasks] = useState([]);

    return (
        <Context.Provider value={{
            Delete,
            setDelete,
            rowSelectedDelete,
            setRowSelectedDelete,
            id,
            setId,
            Task,
            setTasks
        }}>
            {children}
        </Context.Provider>
    )
}
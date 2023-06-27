import { createContext, useState  } from "react";

export default autenticContext = createContext()

export const autenticContextProvider = ({children}) => {
    

    return (
        <autenticContext.Provider value={{}}>

        </autenticContext.Provider>
    )
}

import { createContext, useState} from "react";





const ColorContext = createContext("dark")

export const ColorContextProvider = ({children}) => {

    const [colorMode, setColorMode] = useState("light")

    return (<ColorContext.Provider value={{colorMode, setColorMode}}>
        {children}
    </ColorContext.Provider>)
} 

export default ColorContext

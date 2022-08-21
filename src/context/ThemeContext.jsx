import { createContext, useState } from "react";


export const ThemeContext = createContext();


export const ThemeProvider = ({children}) => {
    const [dark, setDark] = useState(false);

    const value = {
        dark, 
        setDark
    }


    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}



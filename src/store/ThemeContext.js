import React, { createContext } from 'react'
import { useState } from 'react'


const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
    const [theme,setTheme] = useState(false)

    return <ThemeContext.Provider value={{theme,setTheme}}>
        {children}
    </ThemeContext.Provider>
}
export default ThemeContext;
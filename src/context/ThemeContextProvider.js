import {useState, useContext , createContext} from "react"


const ThemeContext = createContext()


export const ThemeContextProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(true)

    return <ThemeContext.Provider value ={{darkMode,setDarkMode}}>
        {children}
    </ThemeContext.Provider>
}

const useThemeContext = () => useContext(ThemeContext)

export default useThemeContext
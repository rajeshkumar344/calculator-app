import React, { createContext, useEffect } from 'react'


export const AppContext = createContext();

export default function ThemeContext({children}) {
       const [theme, setTheme] = React.useState('daark')

       useEffect(()=>{
        if(theme === "daark"){
            document.documentElement.classList.add("daark")
        }else{
            document.documentElement.classList.remove("daark")
        }
       },[theme])

       const toggleTheme = ()=>{
        setTheme(theme === "light"? 'daark': 'light' )
       }
  return (
    <div>
        <AppContext.Provider value={{theme, toggleTheme}}>
             {children}
        </AppContext.Provider>

    </div>
  )
}

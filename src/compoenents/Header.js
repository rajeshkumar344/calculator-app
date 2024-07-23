import React, { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import  { AppContext } from '../context/ThemeContext'


export default function Header() {
 const {theme,toggleTheme}= useContext(AppContext)
console.log(theme)

  return (
   
    <div className=' bg-gray-100 border-b items-center p-4 text-gray-900 
    flex justify-between daark:bg-gray-900 daark:text-white'>
        <h1 className='font-bold text-2xl'>Dashboard</h1>
        <button className='text-2xl text-dark' onClick={toggleTheme} >

         {theme === "light"? <FaMoon/> : <FaSun/> }
       
        </button>
    </div>
   
  )
}

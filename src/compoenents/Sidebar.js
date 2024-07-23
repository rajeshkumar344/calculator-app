import React from 'react'
import {FaShoppingCart, FaTachometerAlt} from "react-icons/fa"
import { FaPeopleLine } from "react-icons/fa6";
import { PiUsersFill } from "react-icons/pi";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";


export default function Sidebar() {
  return (
    <div className='bg-gray-100 text-gray-900 min-h-screen px-4 fixed w-16 md:w-64
     border-r border-grey-300  daark:bg-gray-900 daark:text-white daark:border-gray-900'>
        <h1 className='text-2xl font-bold hidden md:block pt-4'>Cwy shop</h1>
        
            <ul className='flex flex-col mt-5 text-xl'>
                <li className='flex space-x-4 px-2 py-3 items-center hover:rounded
                 hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                <FaTachometerAlt />
                <span className=' hidden md:inline'>Dashboard</span>
                </li>

                <li className='flex space-x-4 px-2 py-3 items-center hover:rounded
                 hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                <FaShoppingCart />
                <span className=' hidden md:inline'>Orders</span>
                </li>

                <li className='flex space-x-4 px-2 py-3 items-center hover:rounded
                 hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                <FaPeopleLine />
                <span className=' hidden md:inline'>Users</span>
                </li>

                <li className='flex space-x-4 px-2 py-3 items-center hover:rounded
                 hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                <PiUsersFill />
                <span className=' hidden md:inline'>customers</span>
                </li>

                <li className='flex space-x-4 px-2 py-3 items-center hover:rounded
                 hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                <PiShoppingBagOpenFill />
                <span className=' hidden md:inline'>Products</span>
                </li>

                <li className='flex space-x-4 px-2 py-3 items-center hover:rounded
                 hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                <IoSettingsSharp />
                <span className=' hidden md:inline'>Settings</span>
                </li>
            </ul>
       
    </div>
  )
}

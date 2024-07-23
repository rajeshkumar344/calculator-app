import React from 'react'


export default function Card({items,title,value}) {
  return (
    <div className=' bg-white shadow-md flex space-x-6  items-center p-4 
     rounded-lg daark:bg-gray-900 daark:text-white '>
        {items}
        <div>
            <h2 className='font-bold'>{title}</h2>
            <span>{value}</span>
        </div>
    </div>
  )
}

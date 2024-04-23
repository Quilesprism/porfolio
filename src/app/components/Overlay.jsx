import React from 'react'
import Navlink from './NavLink'
const Overlay = ({ lin }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {lin.map((link, index) =>(
            <li key={index}>
                <Navlink href={link.path} title={link.title} />
            </li>
        ))}  
    </ul>
  )
}

export default Overlay

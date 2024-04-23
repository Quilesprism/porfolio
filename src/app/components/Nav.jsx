"use client";
import Link from 'next/link'
import React, {useState} from 'react'
import Navlink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Overlay from './Overlay';
const Navlinks = [
  { title: 'about',
    path: '#about'
  },
  { title: 'projects',
    path: '#projects'
  },
  { title: 'contact',
    path: '#contact'
  },
]

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#000000] bg-opacity-90'>
    <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-1'>
      <Link href={"/"} className='text-1xl md:text-4xl text-white font-semibold'>
        
      </Link>
      <div className='mobile-menu block md:hidden'>
        {!navbarOpen ? (<button onClick={() => setNavbarOpen(true)} 
        className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
        ><Bars3Icon className='w-5 h-5'/>
        </button>):
        (<button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
        >
          <XMarkIcon className='w-5 h-5'/>
          </button>) }

      </div>
      <div className='menu hidden md:block md:w-auto' id='navbar'>
        <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
          {
            Navlinks.map((link, index) => {
              return (
                <li key={index}>
                  <Navlink href={link.path} title={link.title} />
                </li>
              )
            })}
        </ul>
      </div>
    </div>
    {navbarOpen ? <Overlay lin={Navlinks}/> : null}
    </nav>
  )
}

export default Nav;

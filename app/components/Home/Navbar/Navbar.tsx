'use client'
import React, { useEffect, useState } from 'react'

import Link from 'next/link'

import { IoIosMenu } from "react-icons/io";
type Props = {
  openNav:()=>void
  
}
const Navbar = ({openNav}:Props) => {
  const [navBg,setNavBg] = useState(false)
  useEffect(()=>{
    const handler = () =>{
      if(window.scrollY >= 90){
        setNavBg(true)
      }
      if(window.scrollY<90){
        setNavBg(false)
      }
    }
    window.addEventListener('scroll',handler)
    return ()=>{
      window.removeEventListener('scroll',handler)

    }
  },[])
  return (
    <div className={`fixed ${navBg ? "bg-blue-600 w-full transition":"fixed"} h-[12vh] z-10  w-full`} >
      <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto  '>
       <h1 className='text-white xl:text-4xl
       lg:text-3xl md:text-2xl font-medium  sm:text-xl  '>Tabish Raza</h1>
       <div className='flex items-center space-x-10'>
        <div className='hidden lg:flex items-center space-x-8'>
        <ul className='list-none flex gap-9'>
          <Link className='nav__link' href='/hero'>
          <li>Home</li>
          </Link>
          <Link className='nav__link' href='/about'>
          <li>About</li>
          </Link >
          
          <Link className='nav__link' href='/skills'>
          <li>Skills</li>
          </Link >
          <Link className='nav__link' href='/contact'>
          <li>Contact</li>
          </Link >
          
         
        </ul>
        </div>
         <div className='flex items-center space-x-4' >
          <button className='md:px-10 md:py-3 px-8 text-blue-800 font-semibold sm:text-base  text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg'>Hire Me</button>
          <h1 className='w-9 h-9 cursor-pointer text-white lg:hidden' onClick={openNav}><IoIosMenu style={{ width: '50px', height: '40px' }}  /></h1>
         </div>
       </div>
      </div>
   
    </div>
  )
}

export default Navbar
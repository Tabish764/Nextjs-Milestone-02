import React from 'react'
import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import { IoIosMenu } from "react-icons/io";
type Props={

  closeNav:()=>void;
  showNav:boolean;
}
const MobileNav = ({closeNav,showNav}:Props) => {
  const navOpen = showNav  ? 'translate-x-0':'translate-x-[-100%]'
  return (
    <>    <div className={`fixed ${navOpen} inset-0 z-30 bg  w-[20%] h-screen `}></div>
      <div className={` ${navOpen} duration-500  text-white fixed justify-center flex flex-col h-full w-[40%] sm:w-[30%] bg-[#000000]  space-y-6 decoration z-[10000]`}>
     
        {navLinks.map((navLink)=>{
          return (
            <Link key={navLink.id} href={navLink.url} >
              <p className='nav__link sm:text-xl no-underline text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]' >{navLink.label}</p>
            </Link>
          )
         })}
        <h2 className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-9 h-9 text-white cursor-pointer' onClick={closeNav} ><IoIosMenu /></h2>
    </div>
    </>

  )
}

export default MobileNav
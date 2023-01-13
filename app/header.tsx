import React from 'react'
import {HiSearch} from 'react-icons/hi';
import { HiShoppingBag } from 'react-icons/hi';
import Image from 'next/legacy/image';
// import '../public/Trind.svg'

function Header() {
  return (
    <ul className='flex justify-between py-3 px-10 text-white  bg-navbar-bg-dark'>
        <li className=' font-head my-auto text-6xl'>
        {/* <Image src='/TRIND.svg' alt='logo' width={100} height={100} /> */}
        TRIND
        </li>
        <li className='  my-auto'>
            <ul className=' text-green-500 text-sm flex space-x-7 items-center justify-center align-middle  font-poppins'>
                <li>New Arrivals</li>
                <li>Shop</li>
                <li> About Us</li>
            </ul>
        </li>
        <li className='flex my-auto space-x-5  '>
            <div className='flex mt-1 space-x-5'>
                <HiSearch className='text-2xl' ></HiSearch>
                <HiShoppingBag className='text-2xl ' ></HiShoppingBag>
            </div>
            <button className=' bg-green-500 px-5 py-1 rounded-3xl'>Login</button>
        </li>
    </ul>
  )
}

export default Header
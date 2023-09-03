import React from 'react'
import log from "../assets/logo-removebg-preview.png"

export default function Nav() {
  return (
    <div>
        <nav className='bg-black flex justify-center py-2'>
            <ul className='flex text-white gap-3 justify-around w-11/12 items-center max-sm:text-[10px]'>
                <li className='relative'><img className='w-12' src={log} alt="" />
                <p className='absolute -top-1 left-2/4 -translate-x-2/4'>amzon</p>
                </li>
                <li className='max-sm:hidden'>place</li>
                <li className='w-2/5'><input className='border w-full rounded py-1 px-2' type="text" placeholder='search'  /></li>
                <li><a href="/sign">Sign Up</a></li>
                <li className='max-sm:hidden'>hello</li>
                <li><a href="/cart">cart</a></li>
            </ul>
        </nav>
    </div>
  )
}

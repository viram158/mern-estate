import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <div className='bg-slate-200 shadow-md'>
            <div className='flex flex-wrap justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/'>
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap cursor-pointer'>
                    <span className='text-slate-500'>SAHARA</span>
                    <span className='text-slate-700'>ESTATE</span>
                </h1>
                </Link>
                <form className='bg-slate-100 p-3 rounded-lg flex items-center cursor-pointer'>
                    <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64 ' />
                    <FaSearch className='text-slate-500'/>
                </form>
                <ul className='flex gap-4 cursor-pointer'>
                    <Link to='/'>
                    <li className='hidden sm:inline hover:text-slate-400'>Home</li>
                    </Link>
                    <Link to='/about'>
                    <li className='hidden sm:inline hover:text-slate-400'>About</li>
                    </Link>
                    <Link to='/sign-in'>
                    <li className='hover:text-slate-400'>Sign in</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

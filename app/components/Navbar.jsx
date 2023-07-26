'use client'
import Link from 'next/link'
import React from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

const Navbar = () => {
    return (
        <>
            <div className='fixed top-0 left-0 w-full z-10 bg-transparent opacity-80 backdrop-blur-xl p-4 xl:pb-5'>
                <ul className='flex items-center justify-evenly'>
                    <Link href='/' >Home</Link>

                    <div className='justify-center items-center gap-4 flex'>
                        <Link href='/projects' >projects</Link>
                        <Link href='/blogs' >blogs</Link>
                        <button
                            className='flex items-center justify-center w-8 h-8 rounded-full border border-gray-500'
                        >
                            {'light' === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
                        </button>
                    </div>

                </ul>
            </div>
        </>

    )
}

export default Navbar
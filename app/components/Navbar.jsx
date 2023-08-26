'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <>
            <div className='fixed top-0 left-0 w-full z-10 bg-transparent opacity-80 backdrop-blur-xl p-4 xl:pb-5 hidden md:block'>
                <ul className='flex items-center justify-evenly'>
                    <Link href='/'>home</Link>
                    <div className='justify-center items-center gap-4 flex'>
                        <Link href='/projects'>projects</Link>
                        <Link href='/blogs'>blogs</Link>
                    </div>
                </ul>
            </div>

            <div>
                <div className='z-50 pt-0 pr-2 right-[0%] w-[220px] fixed h-[0px] flex items-start justify-end md:hidden '>
                    <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
                        <span className="bar" id="bar1" />
                        <span className="bar" id="bar2" />
                        <span className="bar" id="bar3" />
                    </button>
                </div>

                <ul class={`navbar pt-[60px] bg-transparent backdrop-blur-lg md:hidden fixed z-30  w-[250px] p-2 gap-1 h-[32vh] justify-start items-center flex flex-col transition-all ease-in ${isOpen ? 'right-[0%] top-[0%]' : 'right-[-100%] top-[-100%]'}`}>
                    <Link href='/' className='ml-[20%]  px-3 py-1'>Home</Link>
                    <Link href='/projects' className='  ml-[20%] px-3 py-1'>Projects</Link>
                    <Link href='/blogs' className='ml-[20%] px-3 py-1'>Blogs</Link>
                    {/* <li className='ml-[28%] pr-3 py-2'> {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}</li> */}
                </ul>
            </div>


        </>


    );
};

export default Navbar;

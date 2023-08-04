'use client'
import { motion } from 'framer-motion';
import {
    FiArrowRight,
    FiInstagram,
    FiTwitter,
    FiGithub,
    FiMail,
    FiFacebook,
    FiArrowDown,
} from 'react-icons/fi';
import React from 'react';


const Hero1 = () => {
    return (
        <motion.div
            className='mt-[10%] p-2'
            initial={{ z: 100, opacity: 0 }}
            animate={{ z: 0, opacity: 1.2 }}
            transition={{ duration: 1.4 }}
        >
            <div className='mt-10 mx-auto max-w-lg px-4 text-center sm:max-w-xl md:max-w-2xl lg:max-w-4xl'>
                <h1 className='text-2xl sm:text-5xl py-8 font-Blorado'>
                    <span className='hover:text-slate-700 transition-colors animate-fade-in pr-2 sm:pr-4'>
                        I'M
                    </span>
                    <span className='hover:text-purple-500 transition-colors animate-fade-in px-2 sm:px-4'>
                        SHUBAM
                    </span>
                    <span className='hover:text-pink-500 transition-colors animate-fade-in px-2 sm:px-4'>
                        SHARMA
                    </span>
                </h1>
                <h1 className='text-base sm:text-xl font-light pt-2'>
                    I am a builder Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eos, error labore illo iure qui molestiae neque nihil harum minima dolore.
                </h1>
                <h1 className='text-base sm:text-xl font-light pt-2'>
                    I am a I'm a front-end developer and AI ML Enthusiast. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Voluptatem harum iusto, totam cum
                    odit cupiditate. Hit me up, and let's build something special
                </h1>

                <div className='flex flex-row justify-center items-center gap-4 mt-8'>
                    {/* <div className='text-base sm:text-lg'>
                        <span className='border-b-teal-500  border-b-1 border-b'>
                            connect with me
                        </span>
                    </div>
                    <motion.div
                        className='text-base sm:text-lg'
                        iaboutnitial={{ x: 0 }}
                        animate={{ x: [0, 8, -8, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 0.8,
                        }}
                    >
                        <FiArrowDown />
                    </motion.div> */}
                </div>

                <div className='flex flex-row justify-center items-center gap-8 mt-8'>
                    <motion.div
                        whileHover={{ scale: 1.2, color: '#8a3ab9', cursor: 'pointer' }}
                    >
                        <FiInstagram size={20} />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2, color: '#1DA1F2', cursor: 'pointer' }}
                    >
                        <FiTwitter size={20} />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2, color: '#211F1F', cursor: 'pointer' }}
                    >
                        <FiGithub size={20} />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2, color: '#EA4335', cursor: 'pointer' }}
                    >
                        <FiMail size={20} />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2, color: '#1877F2', cursor: 'pointer' }}
                    >
                        <FiFacebook size={20} />
                    </motion.div>
                </div>
            </div>
            <div className="flex justify-center mt-16 items-center">
                <a href='new_resume.pdf' download class="font-light px-4 py-1 border-1 border display-inline-flex items-center justify-center height-50 px-30 rounded-full border-color-theme text-color-theme outline-none no-underline transition-opacity transition-color transition-border-color transition-bg-color select-none whitespace-nowrap hover:opacity-75 border-teal-500">
                    Download CV
                </a>


            </div>
            {/* <div className='flex justify-center mt-12'>
                <motion.div>
                    <FaAngleDoubleDown size={25} />
                </motion.div>
            </div> */}
        </motion.div>
    );
};

export default Hero1;

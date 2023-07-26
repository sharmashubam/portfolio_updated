'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiInstagram, FiTwitter, FiGithub, FiMail, FiFacebook } from 'react-icons/fi';
import React from 'react';

const Hero1 = () => {
    return (
        <motion.div
            className='mt-12 p-2'
            initial={{ z: 100, opacity: 0 }}
            animate={{ z: 0, opacity: 1.2 }}
            transition={{ duration: 1.4 }}
        >
            <div className='mt-[7%] w-[50%] mx-auto p-4 text-3xl relative'>
                <h1 className='text-5xl py-8 font-Blorado'>
                    <span className='hover:text-slate-700 transition-colors animate-fade-in pr-4'>
                        I'M
                    </span>
                    <span className='hover:text-purple-500 transition-colors animate-fade-in px-4'>
                        SHUBAM
                    </span>
                    <span className='hover:text-pink-500 transition-colors animate-fade-in px-4'>
                        SHARMA
                    </span>
                </h1>
                <h1 className='text-xl font-light pt-2'>
                    I am a builder Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Eos, error labore illo iure qui molestiae neque nihil harum
                    minima dolore.
                </h1>
                <h1 className='text-xl font-light pt-2'>
                    I am a I'm a front-end developer and AI ML Enthusiast. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Voluptatem harum iusto,
                    totam cum odit cupiditate. Hit me up, and let's build something
                    special
                </h1>

                <Link href='/about' className='flex flex-row justify-start items-center gap-4 mt-8'>
                    <div className='text-lg'>
                        <span className='hover:border-b-purple-500 transition-colors hover:border-b-2'>
                            See More About Me
                        </span>
                    </div>
                    <motion.div
                        className='text-lg'
                        initial={{ x: 0 }}
                        animate={{ x: [0, 8, -8, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 0.8,
                        }}
                    >
                        <FiArrowRight />
                    </motion.div>
                </Link>

                <div className='flex flex-row justify-start items-center gap-8 mt-8'>
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
        </motion.div>
    );
};

export default Hero1;

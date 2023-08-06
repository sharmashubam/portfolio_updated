'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <div className='mt-[7%] w-full xl:w-[60%] md:w-[80%] mx-auto p-2 md:p-4 text-3xl relative'>
            <motion.div
                initial={{ z: 100, opacity: 0 }}
                animate={{ z: 0, opacity: 1.2 }}
                transition={{ duration: 1.4 }}
            >
                <div className='p-4'>
                    <h1 className='text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl'>
                        about me.
                    </h1>
                    <p className='font-normal py-2 sm:text-xl hidden md:block'>
                        find more information about me, what I do, and my current skills mostly in terms of programming and technology
                    </p>
                </div>
                <div className='flex flex-col xl:flex-row mt-6 gap-3 '>
                    <div className='w-full  xl:w-1/2 p-4'>
                        <h1 className='text-xl font-bold tracking-tight text-slate-200 sm:text-xl border-b-slate-400 border-b-4 w-fit py-2'>
                            get to know me!
                        </h1>
                        <ul className='text-lg mt-4'>
                            <li className='mb-2'>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</li>
                            <li className='mb-2 hidden xl:block '>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help  useful content related to Web Development and Programming</li>
                            <li className='mb-2 hidden xl:block'>I'm open to Job opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</li>
                        </ul>
                    </div>
                    <div className='w-full xl:w-1/3 p-4'>
                        <h1 className='text-xl font-bold tracking-tight text-slate-200 sm:text-xl border-b-slate-400 border-b-4 w-fit py-2'>
                            skills.
                        </h1>
                        <div className='flex flex-wrap gap-4 mt-4'>
                            {['HTML', 'CSS3', 'ReactJS', 'Git and Github', 'ExpressJS', 'NodeJS', 'NextJS', 'Tailwind CSS', 'JavaScript', 'MongoDB'].map((val, x) => {
                                return (
                                    <div key={x} className='px-3 py-2 md:text-lg text-sm  font-medium rounded-lg bg-transparent backdrop-blur-xl'>
                                        {val}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Skills;

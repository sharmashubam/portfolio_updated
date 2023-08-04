'use client'
import React from 'react'
import { motion } from 'framer-motion'
const Contact = () => {
    return (
        <motion.div
            className='mt-12 p-2'
            initial={{ z: 100, opacity: 0 }}
            animate={{ z: 0, opacity: 1.2 }}
            transition={{ duration: 1.4 }}
        >
            <div className='mt-[1%] xl:w-[50%] w-full md:w-[90%] mx-auto p-4 text-3xl relative'>
                <h1 className='text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl py-4'>
                    contact me.
                </h1>
            </div>

            <form class="max-w-3xl mx-auto xl:p-12 md:p-8 p-4 bg-transparent opacity-80 backdrop-blur-xl rounded-lg shadow-md">
                <div class="mb-6">
                    <label for="name" class="block text-white font-semibold">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        class="mt-1 block w-full px-6 py-3 border rounded-lg text-black focus:ring focus:ring-blue-300"
                        required
                    />
                </div>
                <div class="mb-6">
                    <label for="email" class="block font-semibold">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        class="mt-1 block w-full px-6 py-3 border rounded-lg text-black focus:ring focus:ring-blue-300"
                        required
                    />
                </div>
                <div class="mb-6">
                    <label for="message" class="block font-semibold">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        class="mt-1 block w-full px-6 py-4 border rounded-lg resize-none text-black focus:ring focus:ring-blue-300"
                        rows="8"
                    ></textarea>
                </div>
                <div class="flex justify-end pr-2">
                    <button
                        type="submit"
                        class="px-6 py-3 font-semibold bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Submit
                    </button>
                </div>
            </form>





        </motion.div >

    )
}

export default Contact
import React from 'react'
import Blog from './Blog'
import blogsData from './blogsData'

const Blogs = () => {
  return (
    <div className='flex flex-col container mx-auto mt-12 p-2 xl:w-[50%] md:w-[90%] w-full'>
      <h1 className=' p-4 mt-12 text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl xl:w-[85%] w-[95%] mx-auto'>
        blogs
      </h1>

      <div className="flex flex-col xl:w-[85%] w-full mx-auto justify-end gap-6  mt-12 p-2 ">
        {blogsData.map((blog, index) => (
          <Blog key={index} {...blog} />
        ))}
      </div>
    </div>

  )
}

export default Blogs
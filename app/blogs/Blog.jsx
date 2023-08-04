import React from 'react'

const Blog = ({ img, author, date, title, description, liveLink }) => {
    return (
        <div>
            <a href={liveLink} className='flex flex-col gap-4 p-5 rounded-md hover:bg-[#1c1c1c] group'>
                <div className='h-[170px] w-[300px]'>
                    <img className='w-full h-full object-cover rounded-sm' src={img} alt={author} />
                </div>
                <div className='w-full'>
                    <h1 className="text-xl font-bold pr-2 pb-2">{title}</h1>
                    <div className='flex items-center flex-row'>
                        <h1 className="text-md font-medium pr-2">{author}</h1>
                        <p className='text-sm'>{date}</p>
                        <span className='px-2'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="inline-block h-5 w-5 shrink-0 transition-transform group-hover:translate-y--4 group-hover:translate-x-2 group-focus-visible:translate-x-1 motion-reduce:transition-none mb-1 translate-y-2px"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </span>
                    </div>

                    <p className="my-3 text-sm leading-normal">{description}</p>
                </div>
            </a>
        </div>
    )
}

export default Blog
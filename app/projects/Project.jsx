'use client'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Project = ({ name, description, githubLink, liveLink }) => {
    return (
        <div>
            <h1 className="text-md font-bold mb-2  -inset-x-4 -inset-y-2.5  rounded md:-inset-x-6 md:-inset-y-4 lg:block">{name}</h1>
            <p className="my-3 text-sm leading-normal ">{description}</p>
            <div className="flex space-x-2 ">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium leading-5 text-teal-200 " > TypeScript </div>
                <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium leading-5 text-teal-200' > ReactJs </div>
            </div>
        </div>
    );
};

export default Project;

import { AiOutlineLink } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

const Project = ({ name, description, githubLink, liveLink, img }) => {
  return (
    <div className='flex flex-row gap-4 p-5 rounded-md hover:bg-[#1c1c1c] group'>
      <div className='h-[80px] w-[130px]'>
        <img className='w-full h-full object-cover rounded-sm' src={img} alt={name} />
      </div>
      <div className='w-10/12'>
        <div className='flex items-center flex-row'>
          <h1 className="text-md font-bold ">{name}</h1>
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
        <div className='flex flex-row mb-3 items-center gap-2'>
          <a href={liveLink} className='pr-2 flex items-center'>
            <AiOutlineLink size={15} />
            <span className='ml-1 text-sm'>Live</span>
          </a>
          <a href={githubLink} className='flex items-center'>
            <FiGithub size={15} />
            <span className='ml-1 text-sm'>GitHub</span>
          </a>
        </div>

        <div className="flex space-x-2">
          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium leading-5 text-teal-200" > TypeScript </div>
          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium leading-5 text-teal-200' > ReactJs </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

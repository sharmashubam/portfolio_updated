'use client'
import { useState } from 'react';
import Project from './Project';
import projectsData from './projectData';

const ProjectPage = () => {
  const [domain, setDomain] = useState('all');

  const domainMap = {
    'All': 'all',
    'Web Dev': 'web',
    'Machine Learning': 'ml',
    'Open Source': 'os'
  };

  const domainHandler = (val, event) => {
    event.preventDefault();
    setDomain(domainMap[val]);
  };

  const filteredProjects = domain === 'all' ? projectsData : projectsData.filter(project => project.dom === domain);

  return (
    <div>
      <div className='container mx-auto md:mt-16 mt-12 p-2 md:w-[80%]'>
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='md:w-1/2 md:sticky md:top-26 md:h-fit flex flex-col justify-end items-center sticky-div'>
            <div className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl md:pl-0 pl-4 mt-5 md:mt-0 w-full md:w-fit  '>
              projects
              <h1 className='mt-3 px-2 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>
                check them out
              </h1>
            </div>
            <div>
              <ul className='flex md:flex-col flex-row xl:gap-4 gap-1 text-[#8b8c8b] mt-8'>
                {['All', 'Web Dev', 'Machine Learning', 'Open Source'].map((val, x) => (
                  <li
                    onClick={(event) => { domainHandler(val, event) }} // Pass the event object here
                    key={x}
                    className={`group flex items-center py-3 cursor-pointer font-bold 
            ${domain === domainMap[val] ? 'text-white' : ''}`}
                  >
                    <span
                      className={`nav-indicator xl:mr-4 mr-1 h-px md:w-8 w-0 bg-slate-500 transition-all
              ${domain === domainMap[val] ? 'md:w-20 bg-slate-100' : ''}`}
                    ></span>
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-400
              ${domain === domainMap[val] ? 'text-white' : ''}`}
                    >
                      {val}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='md:w-1/2'>
            <div className="flex flex-col gap-6 mt-8">
              {filteredProjects.map((project, index) => (
                <Project key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default ProjectPage;

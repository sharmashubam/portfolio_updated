import Project from './Project';
import projectsData from './projectData';

const ProjectPage = () => {
  return (
    <div className="container mx-auto mt-12 p-2 w-[70%]">
      <div className='flex flex-row  '>
        <div className='w-1/2 p-4 mt-12 text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl '>
          Projects
          <h1 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>Check them out</h1>
          <div>
            <ul className='flex flex-col text-[#8b8c8b] mt-16 w-max'>
              {
                ['All', 'Web Dev', 'Machine Learning', 'Open Source'].map((val, x) => {
                  return (
                    <li key={x} className="group flex items-center py-3 active cursor-pointer font-bold">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-500 transition-all group-hover:w-16
                        group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                      </span>
                      <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-400 
                        group-hover:text-slate-200 group-focus-visible:text-slate-200'>{val}</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-1/2 justify-end gap-12">
          {projectsData.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

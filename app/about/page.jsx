import React from 'react';

const AboutPage = () => {
  const listContent = [
    {
      title: 'Engineering',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illo molestias aperiam dicta quidem magni sapiente voluptatibus sint, minima commodi?',
    },
    {
      title: 'Engineering',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illo molestias aperiam dicta quidem magni sapiente voluptatibus sint, minima commodi?',
    },
    {
      title: 'Engineering',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illo molestias aperiam dicta quidem magni sapiente voluptatibus sint, minima commodi?',
    },
  ];

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[40%] border ">
        <ul>
          {listContent.map((item, index) => (
            <li
              key={`list-item-${index}`}
              className="flex items-center mb-6 relative"
            >
              <div
                className="h-5 w-5 rounded-full bg-mark border-2 border-cw absolute  z-10"
              />
              <div className="ml-6 mt-6">
                <h1 className="text-base font-semibold">{item.title}</h1>
                <p className="text-gray-700">{item.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;

import React from 'react';

import config from '../config/index.json';

const About = () => {
  const { company, about } = config;
  const { logo } = company;
  const { socialMedia } = about;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-1">
          <img src={logo} alt={'Logo'} className="w-16 h-16" />
          <p className="text-center text-gray-500">BBHQ</p>
          <p className={` text-gray-500 xl:inline`}>
            <span className="text-primary">—</span>
            Berantas Buta Huruf Quran
            <span className="text-primary">—</span>
          </p>
        </div>
        <div className="flex items-center gap-x-8 mt-6 h-8">
          {socialMedia?.map((res) => (
            <a
              key={res.alt}
              aria-label="github"
              href={res.link}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="fill-current text-gray-800 dark:text-white hover:text-primary"
                src={res.icon}
                alt={res.alt}
              />
            </a>
          ))}
        </div>
        <div className="flex items-center mt-6">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            Copyright &copy; {new Date().getFullYear()} - All right reserved by
            BBHQ
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;

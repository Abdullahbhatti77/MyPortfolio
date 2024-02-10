import React from 'react';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import bootstrap from '../assets/bootstrap.svg';
import javascript from '../assets/javascript.svg';
import react from '../assets/react.svg';
import tailwind from '../assets/tailwind.svg';
import git from '../assets/git.svg';
import nextjs from '../assets/nextjs.svg';
import redux from '../assets/redux.svg';
import seo from '../assets/seo.svg';
import wordpress from '../assets/wordpress.svg';
import mongodb from '../assets/mongodb.svg';
import aws from '../assets/aws.svg';
import vuejs from '../assets/vuejs.svg';
import vuex from '../assets/vuex.svg';
import vuetify from '../assets/vuetify.svg';
import api from '../assets/api.svg';
import python from '../assets/python.svg';

const skillsData = [
  { name: 'React JS', icon: react },
  { name: 'Next JS', icon: nextjs },
  { name: 'Vue JS', icon: vuejs },
  { name: 'Python', icon: python },
  { name: 'Redux JS', icon: redux },
  { name: 'VueX', icon: vuex },
  { name: 'API Integration', icon: api },
  { name: 'Mongo DB', icon: mongodb },
  { name: 'Tailwind Css', icon: tailwind },
  { name: 'Vuetify', icon: vuetify },
  { name: 'Git', icon: git },
  { name: 'AWS', icon: aws },
  { name: 'SEO', icon: seo },
  { name: 'Wordpress', icon: wordpress },
  { name: 'HTML', icon: html },
  { name: 'CSS', icon: css },
  { name: 'Bootstrap', icon: bootstrap },
  { name: 'Javascript', icon: javascript },
];

export default function Skills() {
  return (
    <div className='lg:px-12 bg-[#FCFCFC] py-5 xl:px-20 md:px-0' id="skills">
      <h2 className='flex justify-center text-4xl font-bold text-slate-700'>Skills</h2>
      <div className='grid grid-cols-2 gap-4 md:mt-0 mt-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-20 md:p-10'>
        {skillsData.map((skill, index) => (
          <div key={index} className='flex flex-col items-center'>
            <img src={skill.icon} className='w-20 h-20' alt={`${skill.name} Logo`} />
            <p className='flex justify-center p-2'>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

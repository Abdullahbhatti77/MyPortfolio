import React from 'react';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import bootstrap from '../assets/bootstrap.svg';
import javascript from '../assets/javascript.svg';
import react from '../assets/react.svg';
import tailwind from '../assets/tailwind.svg';
import mui from '../assets/mui.svg';
import git from '../assets/git.svg';
import nextjs from '../assets/nextjs.svg';
import redux from '../assets/redux.svg';
import seo from '../assets/seo.svg';
import wordpress from '../assets/wordpress.svg';
import mongodb from '../assets/mongodb.svg';
import aws from '../assets/aws.svg';
import nodejs from '../assets/nodejs.svg';

export default function Skills() {
  return (
    <>
      <div className='lg:px-20 bg-[#EEEEEE] py-5' id="skills">

        <h2 className='flex justify-center text-4xl font-light'>Skills</h2>

        <div className='grid grid-cols-2 gap-4 md:mt-0 mt-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-20 md:p-10'>

          <div className='flex flex-col items-center'>
            <img src={react} className='w-20 h-20' alt='HTML5 Logo' />
            <p className='flex justify-center p-2'>React JS</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={nextjs} className='w-20 h-20' alt='nextjs Logo' />
            <p className='flex justify-center p-2'>Next JS</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={redux} className='w-20 h-20' alt='redux Logo' />
            <p className='flex justify-center p-2'>Redux JS</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={nodejs} className='w-20 h-20' alt='nodejs Logo' />
            <p className='flex justify-center p-2'>Node JS</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={mongodb} className='w-20 h-20' alt='mongodb Logo' />
            <p className='flex justify-center p-2'>Mongo DB</p>
          </div>

          <div className='flex flex-col items-center'>
            <img src={tailwind} className='w-20 h-20' alt='tailwind Logo' />
            <p className='flex justify-center p-2'>Tailwind Css</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={mui} className='w-20 h-20' alt='mui Logo' />
            <p className='flex justify-center p-2'>MUI</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={git} className='w-20 h-20' alt='git Logo' />
            <p className='flex justify-center p-2'>Git</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={aws} className='w-20 h-20' alt='aws Logo' />
            <p className='flex justify-center p-2'>AWS</p>
          </div>

          <div className='flex flex-col items-center'>
            <img src={seo} className='w-20 h-20' alt='seo Logo' />
            <p className='flex justify-center p-2'>SEO</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={wordpress} className='w-20 h-20' alt='wordpress Logo' />
            <p className='flex justify-center p-2'>Wordpress</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={html} className='w-20 h-20' alt='html Logo' />
            <p className='flex justify-center p-2'>HTML</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={css} className='w-20 h-20' alt='css Logo' />
            <p className='flex justify-center p-2'>CSS</p>
          </div>

          <div className='flex flex-col items-center'>
            <img src={bootstrap} className='w-20 h-20' alt='bootstrap Logo' />
            <p className='flex justify-center p-2'>Bootstrap</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={javascript} className='w-20 h-20' alt='javascript Logo' />
            <p className='flex justify-center p-2'>Javascript</p>
          </div>

        </div>
      </div>
    </>
  );
}

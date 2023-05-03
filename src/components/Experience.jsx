import React from 'react'
import techoverflow from '../assets/techoverflow.jfif'
import educist from '../assets/educist.jfif'

export default function Experience() {
    return (
        <>
            <div className='lg:px-20 bg-[#EEEEEE] py-5'>
                <h2 className='flex justify-center text-4xl font-light' id="experience">Experience</h2>
                <div className='grid grid-cols-1 md:mt-0 mt-8 gap-7 lg:grid-cols-2 md:p-10 md:px-0 px-5'>

                    {/* <div className='p-5 bg-white rounded-md shadow-lg relative'>
                        <h3 className='text-2xl font-semibold'>TechOverflow</h3>
                        <p className='absolute mt-1 right-5 text-sm text-slate-600'>Mar/23-May/23</p>
                        <p className='mt-1 text-sm text-slate-600'>Internship</p>
                        <p className='mt-4 text-md text-[#8A8886]'>I did 3 months internship at Techoverflow. During my stay, I Collaborated with a team of developers and designers
                            to create responsive and user-friendly websites using <span className='font-semibold'>React JS, Next JS, Tailwind CSS, Bootstrap.</span> Expanded knowledge of front-end development technologies and best practices through ongoing training.
                            Contributed to team projects using version control tools such as Git and GitHub. I developed a demo website for my company as well.</p>
                    </div>

                    <div className='p-5 bg-white rounded-md shadow-lg relative'>
                        <h3 className='text-2xl font-semibold'>Education Testing Service</h3>
                        <p className='absolute mt-1 right-5 text-sm text-slate-600'>Sep/22-Sep/23</p>
                        <p className='mt-1 text-sm text-slate-600'>Final Year Project</p>
                        <p className='mt-4 text-md text-[#8A8886]'>It is a large scale project. We faced several challenges during the project and one of the challenge was to make it scalable
                            so that it can be further expanded if needed in future. We gained a lot of exposure by working on various web development technologies like <span className='font-semibold'>React JS, Next JS, Redux Saga, Node JS, MongoDB, Heroku, Vercel, Git, Cloudinary
                                SCSS, Tailwind CSS etc </span>. I acted as a frontend developer and QA during the project.</p>
                    </div> */}

                    <div className='rounded-xl shadow-xl p-5 bg-white' >
                        <div className='flex lg:flex-row flex-col'>
                            <div className='flex justify-center items-center flex-col'>
                                <div className='w-32 flex items-center justify-center flex-col'>
                                    <img src={techoverflow} className='w-24 h-24 rounded-full'></img>
                                    <h3 className='text-lg font-bold mt-2 text-slate-600'>TechOverflow</h3>
                                    <p className='text-xs mt-1 text-[#8A8A8A]'>Mar 2023 - May 2023</p>
                                </div>
                            </div>
                            <div className='pl-5'>
                                <h3 className='py-1 text-2xl font-bold'>Internee</h3>
                                <p className='text-sm'>Collaborated with a team of developers and designers to create responsive and user-friendly websites using React JS, Next JS, Tailwind CSS, Bootstrap. Expanded knowledge of front-end development technologies.</p>
                                <h3 className='py-1 text-md font-bold'>Responsibilities:</h3>
                                <ul className='list-disc pl-10 text-sm'>
                                    <li>Converting the designs into working site.</li>
                                    <li>Constantly delivering and receiving the feedback.</li>
                                    <li>Work on the feedback points.</li>
                                    <li>Making the required changes suggested by Project Manager.</li>
                                    <li>Creating reusable code using React JS.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='rounded-xl shadow-xl p-5 bg-white'>
                        <div className='flex lg:flex-row flex-col'>
                            <div className='flex justify-center items-center flex-col'>
                                <div className='w-32 flex items-center justify-center flex-col'>
                                    <img src={educist} className='w-24 h-24 rounded-full'></img>
                                    <h3 className='text-lg font-bold mt-2 text-slate-600'>EdTest</h3>
                                    <p className='text-xs mt-1 text-[#8A8A8A]'>Sep 2022 - Sep 2023</p>
                                </div>
                            </div>
                            <div className='pl-5'>
                                <h3 className='text-2xl font-bold py-2'>Final Year Project</h3>
                                <p className='text-sm'>Worked on client based project. Gained exposure of working with different technologies which includes (MERN Stack, Next JS, Tailwind CSS, Git,Heroku, Vercel, Cloudinary etc.). Its an ongoing project.</p>
                                <h3 className='py-2 text-md font-bold'>Responsibilities:</h3>
                                <ul className='list-disc pl-10 text-sm'>
                                    <li>Quality Assurance.</li>
                                    <li>Creating user design.</li>
                                    <li>Creating custom Api's.</li>
                                    <li>Implementing search filters.</li>
                                    <li>Implementing SignUp, Sign In, Forgot password functionalities.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

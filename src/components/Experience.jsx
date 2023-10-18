import React from 'react'
import techoverflow from '../assets/techoverflow.jfif'
import edtest from '../assets/edtest.jfif'

export default function Experience() {
    return (
        <>
            <div className='lg:px-20 bg-[#EEEEEE] py-5'>
                <h2 className='flex justify-center text-4xl font-light' id="experience">Experience</h2>
                <div className='grid grid-cols-1 md:mt-0 mt-8 gap-7 lg:grid-cols-2 md:p-10 px-5'>
                    <div className='rounded-xl shadow-xl p-5 bg-white'>
                        <div className='flex lg:flex-row flex-col'>
                            <div className='flex justify-center items-center flex-col'>
                                <div className='w-32 flex items-center justify-center flex-col'>
                                    <img src={techoverflow} className='w-24 h-24 rounded-full'></img>
                                    <h3 className='text-lg font-bold mt-2 text-slate-600'>TechOverflow</h3>
                                    <p className='text-xs mt-1 text-[#8A8A8A]'>Mar 2023 - May 2023</p>
                                </div>
                            </div>
                            <div className='pl-5'>
                                <h3 className='py-1 text-2xl font-bold'>Frontend Trainee</h3>
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
                                    <img src={edtest} className='w-24 h-24 rounded-full'></img>
                                    <h3 className='text-lg font-bold mt-2 text-slate-600 text-center'>EdTest Testing Services</h3>
                                    <p className='text-xs mt-1 text-[#8A8A8A]'>Sep 2022 - July 2023</p>
                                </div>
                            </div>
                            <div className='pl-5'>
                                <h3 className='text-2xl font-bold py-2'>Full Stack Developer</h3>
                                <p className='text-sm'>It was my final year project. Gained exposure of working with different technologies which includes (React JS, MongoDB, Node JS, Next JS, Tailwind CSS, Git,Heroku, Vercel, Cloudinary etc.).</p>
                                <h3 className='py-2 text-md font-bold'>Responsibilities:</h3>
                                <ul className='list-disc pl-10 text-sm'>
                                    
                                    <li>Quality Assurance.</li>
                                    <li>Creating user interface.</li>
                                    <li>Creating custom Api's.</li>
                                    <li>Deployment on cloud platforms.</li>
                                    {/* <li>Implementing search filters.</li> */}
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

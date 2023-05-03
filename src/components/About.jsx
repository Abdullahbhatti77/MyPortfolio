import React from 'react'
import profile from '../assets/profile.png'

export default function About() {
    return (
        <>
            <div className='p-5 bg-[#EEEEEE] lg:py-16 lg:px-28' id="about">
                <div className='grid gap-5 p-4 bg-white rounded-lg shadow-lg lg:grid-cols-2 lg:p-5 md:grid-cols-2 sm:grid-cols-1'>
                    <div className='flex justify-center lg:col-span-1'>
                        <img src={profile} className='lg:w-80 lg:h-80 w-56 h-56'></img>
                        {/* <div className='grid grid-cols-2 gap-4 lg:gap-10'>
                            <div className='px-2 text-white bg-blue-600 rounded-sm'>
                                <p>Age</p>
                            </div>
                            <div>
                                <p>23 years</p>
                            </div>
                            <div className='px-2 text-white bg-blue-600 rounded-sm'>
                                <p>Role</p>
                            </div>
                            <div>
                                <p>Web Developer</p>
                            </div>
                            <div className='px-2 text-white bg-blue-600 rounded-sm'>
                                <p>Phone</p>
                            </div>
                            <div>
                                <p>+92 3061564024</p>
                            </div>
                            <div className='px-2 text-white bg-blue-600 rounded-sm'>
                                <p>E-mail</p>
                            </div>
                            <div>
                                <p>abdullah.dev160@gmail.com</p>
                            </div>
                            <div className='px-2 text-white bg-blue-600 rounded-sm'>
                                <p>Address</p>
                            </div>
                            <div>
                                <p>Block C Phase 2, Johar Town Lahore</p>
                            </div>
                        </div> */}
                    </div>

                    <div className='flex items-center pr-5'>
                        <div className='lg:col-span-1'>
                            <h2 className='font-bold'>Hello! I'm M. Abdullah</h2>
                            <p className='text-md font-normal text-[#808084] mt-2'>
                                Computer Science student graduating from <span className='font-bold'>University of Management and Technology Lahore</span>, last semester. Quick learner and thrive in a fast-paced environment. Enjoy
                                working with others and collaborating on projects to create the best
                                possible outcome. Created multiple projects during my graduation. While doing my graduation, I had the pleasure to work for two companies <span className='font-bold'>Techoverflow</span> and <span className='font-bold'>EDTest Testing Services</span>.
                            </p>
                            <p className='font-normal text-[#888888] mt-2'>
                                I am confident that my technical skills and drive to
                                continuously improve will make me a valuable asset to any team.
                            </p>
                            <a href='https://www.linkedin.com/in/muhammad-abdullah-08b0b81b0'><button className='transition duration-400 ease-in-out rounded-md w-full max-w-xs p-2 mt-5 font-light text-white bg-blue-600 hover:bg-blue-500 lg:w-48'>
                                Connect on LinkedIn
                            </button></a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

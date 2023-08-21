import React from 'react'
import gif from '../assets/gifimage2.gif'

export default function About() {
    return (
        <>
            <div className='p-5 bg-[#EEEEEE] lg:py-16 lg:px-28' id="about">
                <div className='grid gap-5 p-4 bg-white rounded-lg shadow-lg lg:grid-cols-2 lg:p-5 md:grid-cols-2 sm:grid-cols-1' data-aos="zoom-in" data-aos-duration="1000">
                    <div className='flex justify-center lg:col-span-1'>
                        <img src={gif} className='lg:w-80 lg:h-80 w-56 h-56'></img>
                    </div>

                    <div className='flex items-center pr-5'>
                        <div className='lg:col-span-1'>
                            <h2 className='font-bold'>Hello! I'm M. Abdullah</h2>
                            <p className='text-md font-normal text-[#808084] mt-2'>
                                Computer Science student graduating from <span className='font-bold'>University of Management and Technology Lahore</span>, last semester completed. Quick learner and thrive in a fast-paced environment. Enjoy
                                working with others and collaborating on projects to create the best
                                possible outcome. Created multiple projects during my graduation. While doing my graduation, I had the pleasure to work for two companies (<span className='font-bold'>Techoverflow</span> and <span className='font-bold'>EDTest Testing Services.)</span>
                            </p>
                            <p className='text-md font-normal text-[#808084] mt-2'>
                                I am confident that my technical skills and drive to
                                continuously improve will make me a valuable asset to any team.
                            </p>
                            <a href='cv.pdf'><button className='transition duration-400 ease-in-out rounded-md w-full max-w-xs p-2 mt-5 text-md font-normal text-white bg-blue-600 hover:bg-gray-800 lg:w-40'>
                                Download CV
                            </button></a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

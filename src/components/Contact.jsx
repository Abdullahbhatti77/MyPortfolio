import React from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { IoLocationSharp } from 'react-icons/io5'

export default function Contact() {
    return (
        <>
            <div className='lg:px-20 bg-[#EEEEEE] py-5'>
                <h2 className='flex justify-center text-4xl font-light' id="contact">Contact</h2>
                <div className='grid gap-7 mt-5 sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 lg:px-0 px-12'>
                    <div className='flex flex-col items-center py-16 justify-center gap-5 mt-5 rounded-lg shadow-lg hover:bg-blue-400 hover:scale-105 transition duration-500 ease-in-out cursor-pointer'>
                        <AiFillPhone className='p-2 text-white bg-blue-600 rounded-full w-14 h-14' />
                        <p className='text-xl font-semibold'>Phone</p>
                        <p className='text-md'>+92 3061564024</p>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-5 py-16 mt-5 rounded-lg shadow-lg hover:bg-blue-400 hover:scale-105 transition duration-500 ease-in-out cursor-pointer'>
                        <AiFillLinkedin className='p-2 text-white bg-blue-600 rounded-full w-14 h-14' />
                        <p className='text-xl font-semibold'>Linkedln</p>
                        <p className='text-md'>Muhammad Abdullah</p>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-5 py-16 mt-5 rounded-lg shadow-lg hover:bg-blue-400 hover:scale-105 transition duration-500 ease-in-out cursor-pointer'>
                        <AiOutlineMail className='p-2 text-white bg-blue-600 rounded-full w-14 h-14' />
                        <p className='text-xl font-semibold'>Email</p>
                        <p className='text-md'>abdullah.dev160@gmail.com</p>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-5 py-16 mt-5 rounded-lg shadow-lg hover:bg-blue-400 hover:scale-105 transition duration-500 ease-in-out cursor-pointer'>
                        <IoLocationSharp className='p-2 text-white bg-blue-600 rounded-full w-14 h-14' />
                        <p className='text-xl font-semibold'>Location</p>
                        <p className='text-md'>Johar Town Lahore, PK</p>
                    </div>
                </div>

            </div>
        </>
    )
}

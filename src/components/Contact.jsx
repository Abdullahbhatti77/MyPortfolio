import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

export default function Contact() {
  return (
    <>
      <div className="lg:px-6 bg-[#FCFCFC] py-10 xl:px-20 md:px-2">
        <h2
          className="flex justify-center text-4xl font-bold text-slate-700"
          id="contact"
        >
          Contact
        </h2>
        <div className="grid gap-7 mt-5 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 px-10">
          <div className="flex flex-col items-center py-16 justify-center gap-5 mt-5 rounded-lg shadow-lg hover:scale-105 transition duration-500 ease-in-out cursor-pointer bg-white hover:bg-slate-700 hover:text-white">
            <AiFillPhone className="p-2 text-white outline bg-slate-700 rounded-full w-12 h-12" />
            <p className="text-xl font-semibold">Phone</p>
            <p className="text-md">+92 3101430615</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-5 py-16 mt-5 rounded-lg shadow-lg hover:bg-slate-700 hover:scale-105 transition duration-500 ease-in-out cursor-pointer bg-white hover:text-white">
            <AiFillLinkedin className="p-2 text-white bg-slate-700 rounded-full w-12 h-12 outline" />
            <p className="text-xl font-semibold">Linkedln</p>
            <p className="text-md">Muhammad Abdullah</p>
          </div>

          <div className="flex flex-col items-center py-16 justify-center gap-5 mt-5 rounded-lg shadow-lg hover:scale-105 transition duration-500 ease-in-out cursor-pointer bg-white hover:bg-slate-700 hover:text-white">
            <AiOutlineMail className="p-2 text-white bg-slate-700 rounded-full w-12 h-12 outline" />
            <p className="text-xl font-semibold">Email</p>
            <p className="text-md">abdullah.dev160@gmail.com</p>
          </div>

          <div className="flex flex-col items-center py-16 justify-center gap-5 mt-5 rounded-lg shadow-lg hover:scale-105 transition duration-500 ease-in-out cursor-pointer bg-white hover:bg-slate-700 hover:text-white">
            <IoLocationSharp className="p-2 text-white bg-slate-700 rounded-full w-12 h-12 outline" />
            <p className="text-xl font-semibold">Location</p>
            <p className="text-md">Johar Town Lahore, PK</p>
          </div>
        </div>
      </div>
    </>
  );
}

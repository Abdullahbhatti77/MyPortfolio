import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";

export default function Hero() {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center h-screen bg-[#FCFCFC]"
        id="home"
      >
        <h1 className="md:text-5xl text-3xl font-bold text-gray-800">
          Software Engineer
        </h1>
        <h3 className="mt-5 md:text-2xl text-lg text-gray-600 px-5 text-center">
          "It always seems impossible until it's done."
        </h3>
        <p className="mt-2 text-gray-600 md:text-lg text-md">
          - Nelson Mandela
        </p>
        <div className="flex justify-center mt-5 space-x-5">
          <a href="https://github.com/Abdullahbhatti77">
            <AiFillGithub className="w-8 h-8 text-white bg-gray-800 rounded-full hover:text-blue-700 hover:bg-white" />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-abdullah-08b0b81b0">
            <TiSocialLinkedinCircular className="w-8 h-8 text-white rounded-full bg-gray-800 hover:text-blue-700 hover:bg-white" />
          </a>
          <a href="https://mail.google.com/mail/u/1/#inbox?compose=new">
            <CgMail className="w-8 h-8 text-white bg-gray-800 rounded-full hover:text-blue-700 hover:bg-white" />
          </a>
        </div>
      </div>
      <div className="border-2"></div>
    </>
  );
}

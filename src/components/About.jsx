import React from "react";
import gif from "../assets/gifimage2.gif";

export default function About() {
  return (
    <>
      <div
        className="p-5 bg-[#FCFCFC] lg:py-16 md:px-12 lg:px-16 xl:px-28"
        id="about"
      >
        <div className="grid gap-5 p-4 bg-white rounded-lg shadow-lg lg:grid-cols-2 lg:p-5 md:grid-cols-1 sm:grid-cols-1">
          <div className="flex justify-center items-center lg:col-span-1">
            <img src={gif} className="lg:w-80 lg:h-80 w-56 h-56"></img>
          </div>

          <div className="flex items-center md:px-5">
            <div className="lg:col-span-1">
              <h2 className="font-bold md:text-center lg:text-left">
                Hi! I'm M. Abdullah
              </h2>
              <p className="text-md font-normal text-slate-700 mt-2">
                Completed my Bachelors in Computer Sciences from University of
                Management and Tecnology, Lahore. I have upto{" "}
                <b>one year of experience</b> in web development. Worked as a{" "}
                <b>Full Stack Developer, Frontend Developer Trainee</b> at
                EduTest Testing Services and Techoverflow. Currently working as
                an <b>Associate Software Engineer</b> at Programmers Force.
                Proficient in Javascript and its frameworks{" "}
                <b>(Vue JS, React JS, Next JS)</b>. Earned multiple
                certifications, contributed in several projects and products
                which show my eagerness to learn and improve.
              </p>
              <p className="text-md font-normal text-slate-700 mt-2">
                I am confident that my technical skills and drive to
                continuously improve will make me a valuable asset to any team.
              </p>
              <div className="md:text-center lg:text-left text-center">
                <a href="cv.pdf">
                  <button className="transition duration-400 ease-in-out rounded-md w-full max-w-xs p-2 mt-5 text-md font-normal text-slate-700 hover:text-white outline-slate-700 outline outline-2 hover:bg-slate-700 lg:w-40">
                    Download CV
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

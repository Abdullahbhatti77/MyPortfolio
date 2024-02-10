import React from "react";
import { useState } from "react";
import educist from "../assets/educist.png";
import techoverflow2 from "../assets/techoverflow2.png";
import weather2 from "../assets/weather2.png";
import netflix2 from "../assets/netflix2.png";
import portfolio3 from "../assets/portfolio3.png";
import portfolio4 from "../assets/portfolio4.png";
import Swal from "sweetalert2";

export default function Projects() {
  const [showFypModal, setShowFypModal] = useState(false);
  const [showNetflixModal, setShowNetflixModal] = useState(false);
  const [showWeatherModal, setShowWeatherModal] = useState(false);
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  const [showTechoverflowModal, setShowTechoverflowModal] = useState(false);
  const [showPortfolio2Modal, setShowPortfolio2Modal] = useState(false);

  function handleFypGitModal() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Source code is not public",
    });
  }
  function handleCrudDemoModal() {
    Swal.fire("Its not deployed yet.");
  }

  const handleFypImage = () => {
    setShowFypModal(true);
    document.addEventListener("click", handleOutsideClickFyp);
  };
  const handleNetflixImage = () => {
    setShowNetflixModal(true);
    document.addEventListener("click", handleOutsideClickNetflix);
  };
  const handleWeatherImage = () => {
    setShowWeatherModal(true);
    document.addEventListener("click", handleOutsideClickWeather);
  };
  const handlePortfolioImage = () => {
    setShowPortfolioModal(true);
    document.addEventListener("click", handleOutsideClickPortfolio);
  };
  const handleTechoverflowImage = () => {
    setShowTechoverflowModal(true);
    document.addEventListener("click", handleOutsideClickTechoverflow);
  };
  const handlePortfolio2Image = () => {
    setShowPortfolio2Modal(true);
    document.addEventListener("click", handleOutsideClickPortfolio2);
  };
  const handleOutsideClickFyp = (event) => {
    if (!event.target.closest(".rounded-lg")) {
      setShowFypModal(false);
      document.removeEventListener("click", handleOutsideClickFyp);
    }
  };
  const handleOutsideClickNetflix = (event) => {
    if (!event.target.closest(".rounded-lg")) {
      setShowNetflixModal(false);
      document.removeEventListener("click", handleOutsideClickNetflix);
    }
  };
  const handleOutsideClickWeather = (event) => {
    if (!event.target.closest(".rounded-lg")) {
      setShowWeatherModal(false);
      document.removeEventListener("click", handleOutsideClickWeather);
    }
  };
  const handleOutsideClickPortfolio = (event) => {
    if (!event.target.closest(".rounded-lg")) {
      setShowPortfolioModal(false);
      document.removeEventListener("click", handleOutsideClickPortfolio);
    }
  };
  const handleOutsideClickTechoverflow = (event) => {
    if (!event.target.closest(".rounded-lg")) {
      setShowTechoverflowModal(false);
      document.removeEventListener("click", handleOutsideClickTechoverflow);
    }
  };
  const handleOutsideClickPortfolio2 = (event) => {
    if (!event.target.closest(".rounded-lg")) {
      setShowPortfolio2Modal(false);
      document.removeEventListener("click", handleOutsideClickPortfolio2);
    }
  };

  return (
    <>
      <div className="bg-[#FCFCFC] lg:px-16 pb-5 xl:px-[120px] md:px-12">
        <h2
          className="flex justify-center text-4xl font-bold text-slate-700"
          id="projects"
        >
          Personal Projects
        </h2>
        <div className="grid grid-cols-1 gap-7 md:mt-10 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex justify-center hover:scale-105 transition duration-400 ease-in-out">
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
              <img
                className="w-full cursor-pointer h-52"
                src={educist}
                alt="Project1"
                onClick={handleFypImage}
              />
              <div className="px-6 py-4">
                <div className="h-[20%]">
                  <div className="mb-0 text-lg font-semibold">
                    Final Year Project
                  </div>
                  <p className="text-md font-normal text-[#8A8886]">
                    Used React JS, Next JS, Redux Saga, MongoDB, Node JS,
                    Tailwind CSS etc.
                  </p>
                </div>
                <div className="flex space-x-3 mt-5 mb-1">
                  <div>
                    <button
                      className="px-2 font-semibold rounded-full hover:bg-white hover:text-slate-700 outline outline-slate-700 bg-slate-700 text-white"
                      onClick={handleFypGitModal}
                    >
                      Code
                    </button>
                  </div>
                  <div>
                    <a href="https://www.educist.net" target="_blank">
                      <button className="px-2 font-semibold rounded-full hover:bg-white hover:text-slate-700 outline outline-slate-700 bg-slate-700 text-white">
                        Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center hover:scale-105 transition duration-400 ease-in-out">
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
              <img
                className="w-full cursor-pointer h-52"
                src={techoverflow2}
                alt="Project2"
                onClick={handleTechoverflowImage}
              />
              <div className="px-6 py-4">
                <div className="h-[20%]">
                  <div className="mb-0 text-lg font-semibold">
                    Techoverflow Website
                  </div>
                  <p className="text-md font-normal text-[#8A8886]">
                    Full responsive website built using React JS and Bootstrap.
                    Internship project.
                  </p>
                </div>
                <div className="flex mt-5 space-x-3 mb-1">
                  <div>
                    <a
                      href="https://github.com/Abdullahbhatti77/techoverflow_website.git"
                      target="_blank"
                    >
                      <button className="px-2 font-semibold rounded-full hover:bg-white hover:text-slate-700 outline outline-slate-700 bg-slate-700 text-white">
                        Code
                      </button>
                    </a>
                  </div>
                  <div>
                    <a href="https://techoverflow.netlify.app" target="_blank">
                      <button className="px-2 font-semibold rounded-full hover:bg-white hover:text-slate-700 outline outline-slate-700 bg-slate-700 text-white">
                        Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center hover:scale-105 transition duration-400 ease-in-out">
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
              <img
                className="w-full cursor-pointer h-52"
                src={weather2}
                alt="Project3"
                onClick={handleWeatherImage}
              />
              <div className="px-6 py-4">
                <div className="h-[20%]">
                  <div className="mb-0 text-lg font-semibold">Weather App</div>
                  <p className="text-md font-normal text-[#8A8886]">
                    Built using React JS, Bootstrap, and openweather api. It
                    shows the weather of entered city.
                  </p>
                </div>
                <div className="flex mt-5 space-x-3 mb-1">
                  <div>
                    <a
                      href="https://github.com/Abdullahbhatti77/PWA-Weather-App.git"
                      target="_blank"
                    >
                      <button className="px-2 font-semibold rounded-full hover:bg-white hover:text-slate-700 outline outline-slate-700 bg-slate-700 text-white">
                        Code
                      </button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://check-ur-weather.netlify.app/"
                      target="_blank"
                    >
                      <button className="px-2 font-semibold rounded-full hover:bg-white hover:text-slate-700 outline outline-slate-700 bg-slate-700 text-white">
                        Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center hover:scale-105 transition duration-400 ease-in-out">
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
              <img
                className="w-full cursor-pointer h-52"
                src={netflix2}
                alt="Project4"
                onClick={handleNetflixImage}
              />
              <div className="px-6 py-4">
                <div className="h-[20%]">
                  <div className="mb-0 text-lg font-semibold">
                    Mini Netflix Clone
                  </div>
                  <p className="text-md font-normal text-[#8A8886]">
                    Responsive website built using React JS, Bootsrap and
                    deployed on netlify.
                  </p>
                </div>
                <div className="flex mt-5 space-x-3 mb-1">
                  <div>
                    <a
                      href="https://github.com/Abdullahbhatti77/netflix-clone-websitee.git"
                      target="_blank"
                    >
                      <button className="px-2 font-semibold rounded-full hover:bg-white hover:text-slate-700 outline outline-slate-700 bg-slate-700 text-white">
                        Code
                      </button>
                    </a>
                  </div>
                  <div>
                    <a href="https://netflixur.netlify.app" target="_blank">
                      <button className="px-2 font-semibold rounded-full hover:bg-white hover:text-slate-700 outline outline-slate-700 bg-slate-700 text-white">
                        Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center hover:scale-105 transition duration-400 ease-in-out">
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
              <img
                className="w-full cursor-pointer h-52"
                src={portfolio3}
                alt="Project5"
                onClick={handlePortfolio2Image}
              />
              <div className="px-6 py-4">
                <div className="h-[20%]">
                  <div className="mb-0 text-lg font-semibold">
                    Portfolio Website
                  </div>
                  <p className="text-md font-normal text-[#8A8886]">
                    Full responsive portfolio website built using Next JS and
                    Tailwind CSS.
                  </p>
                </div>
                <div className="flex mt-5 space-x-3 mb-1">
                  <div>
                    <a
                      href="https://github.com/Abdullahbhatti77/MyPortfolio.git"
                      target="_blank"
                    >
                      <button className="px-2 font-semibold rounded-full hover:bg-white hover:text-slate-700 outline outline-slate-700 bg-slate-700 text-white">
                        Code
                      </button>
                    </a>
                  </div>
                  <div>
                    <a href="https://abdullahdev10.netlify.app" target="_blank">
                      <button className="px-2 font-semibold rounded-full hover:bg-white hover:text-slate-700 outline outline-slate-700 bg-slate-700 text-white">
                        Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center hover:scale-105 transition duration-400 ease-in-out">
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
              <img
                className="w-full cursor-pointer h-52"
                src={portfolio4}
                alt="Project6"
                onClick={handlePortfolioImage}
              />
              <div className="px-6 py-4">
                <div className="h-[20%]">
                  <div className="mb-0 text-lg font-semibold">CRUD App</div>
                  <p className="text-md font-normal text-[#8A8886]">
                    Responsive app built using Next JS, MongoDB, and Tailwind
                    CSS to perform crud operations.
                  </p>
                </div>
                <div className="flex mt-5 space-x-3 mb-1">
                  <div>
                    <a
                      href="https://github.com/Abdullahbhatti77/NextJS-Crud.git"
                      target="_blank"
                    >
                      <button className="px-2 font-semibold rounded-full hover:bg-white hover:text-slate-700 outline outline-slate-700 bg-slate-700 text-white">
                        Code
                      </button>
                    </a>
                  </div>
                  <div>
                    <button
                      className="px-2 font-semibold rounded-full hover:bg-white hover:text-slate-700 outline outline-slate-700 bg-slate-700 text-white"
                      onClick={handleCrudDemoModal}
                    >
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showFypModal && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-slate-700 bg-opacity-50 flex justify-center items-center lg:px-0 px-5">
          <div className="w-[700px] md:h-[350px] h-[200px] overflow-hidden bg-white rounded-lg shadow-lg">
            <img className="w-full h-full" src={educist} alt="Project1" />
          </div>
        </div>
      )}
      {showTechoverflowModal && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-slate-700 bg-opacity-50 flex justify-center items-center lg:px-0 px-5">
          <div className="w-[700px] md:h-[350px] h-[200px] overflow-hidden bg-white rounded-lg shadow-lg">
            <img className="w-full h-full" src={techoverflow2} alt="Project2" />
          </div>
        </div>
      )}
      {showWeatherModal && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-slate-700 bg-opacity-50 flex justify-center items-center lg:px-0 px-5">
          <div className="w-[700px] md:h-[350px] h-[200px] overflow-hidden bg-white rounded-lg shadow-lg">
            <img className="w-full h-full" src={weather2} alt="Project3" />
          </div>
        </div>
      )}
      {showNetflixModal && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-slate-700 bg-opacity-50 flex justify-center items-center lg:px-0 px-5">
          <div className="w-[700px] md:h-[350px] h-[200px] overflow-hidden bg-white rounded-lg shadow-lg">
            <img className="w-full h-full" src={netflix2} alt="Project4" />
          </div>
        </div>
      )}
      {showPortfolioModal && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-slate-700 bg-opacity-50 flex justify-center items-center lg:px-0 px-5">
          <div className="w-[700px] md:h-[350px] h-[200px] overflow-hidden bg-white rounded-lg shadow-lg">
            <img className="w-full h-full" src={portfolio4} alt="Project5" />
          </div>
        </div>
      )}
      {showPortfolio2Modal && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-slate-700 bg-opacity-50 flex justify-center items-center lg:px-0 px-5">
          <div className="w-[700px] md:h-[350px] h-[200px] overflow-hidden bg-white rounded-lg shadow-lg">
            <img className="w-full h-full" src={portfolio3} alt="Project6" />
          </div>
        </div>
      )}
    </>
  );
}

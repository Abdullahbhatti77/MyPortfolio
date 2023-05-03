import React from 'react'
import { useState } from 'react'
import educist from '../assets/educist.png'
import techoverflow2 from '../assets/techoverflow2.png'
import weather2 from '../assets/weather2.png'
import netflix2 from '../assets/netflix2.png'
import portfolio3 from '../assets/portfolio3.png'
import portfolio4 from '../assets/portfolio4.png'


export default function Projects() {
    const [showFypModal, setShowFypModal] = useState(false);
    const [showNetflixModal, setShowNetflixModal] = useState(false);
    const [showWeatherModal, setShowWeatherModal] = useState(false);
    const [showPortfolioModal, setShowPortfolioModal] = useState(false);
    const [showTechoverflowModal, setShowTechoverflowModal] = useState(false);
    const [showPortfolio2Modal, setShowPortfolio2Modal] = useState(false);

    const handleFypImage = () => {
        setShowFypModal(true);
        document.addEventListener("click", handleOutsideClickFyp);
    }
    const handleNetflixImage = () => {
        setShowNetflixModal(true);
        document.addEventListener("click", handleOutsideClickNetflix);
    }
    const handleWeatherImage = () => {
        setShowWeatherModal(true);
        document.addEventListener("click", handleOutsideClickWeather);
    }
    const handlePortfolioImage = () => {
        setShowPortfolioModal(true);
        document.addEventListener("click", handleOutsideClickPortfolio);
    }
    const handleTechoverflowImage = () => {
        setShowTechoverflowModal(true);
        document.addEventListener("click", handleOutsideClickTechoverflow);
    }
    const handlePortfolio2Image = () => {
        setShowPortfolio2Modal(true);
        document.addEventListener("click", handleOutsideClickPortfolio2);
    }
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
            <div className='bg-[#EEEEEE] lg:px-20 py-5'>
                <h2 className='flex justify-center text-4xl font-light' id="projects">Projects</h2>
                <div className='grid justify-center grid-cols-1 gap-7 md:mt-0 mt-8 md:grid-cols-2 lg:grid-cols-3 md:p-10 px-5'>

                    <div className='flex justify-center hover:scale-105 hover:shadow-xl transition duration-400 ease-in-out'>
                        <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
                            <img className="w-full cursor-pointer h-48" src={educist} alt="Project1" onClick={handleFypImage} />
                            <div className="px-6 py-4">
                                <div className="mb-2 text-lg font-semibold">Final Year Project</div>
                                <p className="text-md font-normal text-[#8A8886]">
                                    Different technologies has been used like React JS, Next JS, Redux Saga, MongoDB, Node JS, Tailwind CSS etc.
                                </p>
                                <p>Visit:  <span><a href='https://www.educist.net'>www.educist.net</a></span></p>
                            </div>
                            <div className="px-6 pb-4">
                                <a href='https://www.educist.net'>
                                    <button className="px-3 py-1 font-semibold text-white bg-blue-500 rounded-2xl hover:bg-slate-700">
                                        Check
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center hover:scale-105 hover:shadow-xl transition duration-400 ease-in-out'>
                        <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
                            <img className="w-full cursor-pointer h-48" src={techoverflow2} alt="Project2" onClick={handleTechoverflowImage} />
                            <div className="px-6 py-4">
                                <div className="mb-2 text-lg font-semibold">Techoverflow Website</div>
                                <p className="text-md font-normal text-[#8A8886]">
                                    Full responsive website built using React JS and Bootstrap. I developed this website during internsip.
                                </p>
                                <p>Visit:  <span><a href='https://techoverflow.netlify.app'>techoverflow.netlify.app</a></span></p>
                            </div>
                            <div className="px-6 pb-4">
                                <a href='https://github.com/Abdullahbhatti77/techoverflow_website.git'>
                                    <button className="px-3 py-1 font-semibold text-white bg-blue-500 rounded-2xl hover:bg-slate-700">
                                        Check
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center hover:scale-105 hover:shadow-xl transition duration-400 ease-in-out'>
                        <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
                            <img className="w-full cursor-pointer h-48" src={weather2} alt="Project3" onClick={handleWeatherImage} />
                            <div className="px-6 py-4">
                                <div className="mb-2 text-lg font-semibold">Weather App</div>
                                <p className="text-md font-normal text-[#8A8886]">
                                    Built using React JS, Bootstrap, and openweather api. It shows the weather of entered city.
                                </p>
                                <p>Visit:  <span><a href='https://checkurweather.netlify.app'>checkurweather.netlify.app</a></span></p>
                            </div>
                            <div className="px-6 pb-4">
                                <a href='https://github.com/Abdullahbhatti77/PWA-Weather-App.git'>
                                    <button className="px-3 py-1 font-semibold text-white bg-blue-500 rounded-2xl hover:bg-slate-700">
                                        Check
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center hover:scale-105 hover:shadow-xl transition duration-400 ease-in-out'>
                        <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
                            <img className="w-full cursor-pointer h-48" src={netflix2} alt="Project4" onClick={handleNetflixImage} />
                            <div className="px-6 py-4">
                                <div className="mb-2 text-lg font-semibold">Mini Netflix Clone</div>
                                <p className="text-md font-normal text-[#8A8886]">
                                    Responsive website built using React JS, Bootsrap. It shows the trending movies and tv shows.
                                </p>
                                <p>Visit:  <span><a href='https://netflixur.netlify.app'>netflixur.netlify.app</a></span></p>
                            </div>
                            <div className="px-6 pb-4">
                                <a href='https://github.com/Abdullahbhatti77/netflix-clone-websitee.git'>
                                    <button className="px-3 py-1 font-semibold text-white bg-blue-500 rounded-2xl hover:bg-slate-700">
                                        Check
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center hover:scale-105 hover:shadow-xl transition duration-400 ease-in-out'>
                        <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
                            <img className="w-full cursor-pointer h-48" src={portfolio3} alt="Project5" onClick={handlePortfolio2Image} />
                            <div className="px-6 py-4">
                                <div className="mb-2 text-lg font-semibold">Portfolio Website</div>
                                <p className="text-md font-normal text-[#8A8886]">
                                    Full responsive website built using React JS and Tailwind CSS. Its a portfolio website. Its the website you are seeing now.
                                </p>
                            </div>
                            <div className="px-6 pb-4">
                                <button className="px-3 py-1 font-semibold text-white bg-blue-500 rounded-2xl hover:bg-slate-700">
                                    Check
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center hover:scale-105 hover:shadow-xl transition duration-400 ease-in-out'>
                        <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
                            <img className="w-full cursor-pointer h-48" src={portfolio4} alt="Project6" onClick={handlePortfolioImage} />
                            <div className="px-6 py-4">
                                <div className="mb-2 text-lg font-semibold">Portfolio Website</div>
                                <p className="text-md font-normal text-[#8A8886]">
                                    It is also built using React JS and Bootstrap. Firebase was also used for receiving messages from users in contact section.
                                </p>
                            </div>
                            <div className="px-6 pb-4">
                                <a href='https://github.com/Abdullahbhatti77/portfolio.git'>
                                    <button className="px-3 py-1 font-semibold text-white bg-blue-500 rounded-2xl hover:bg-slate-700">
                                        Check
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {showFypModal && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center lg:px-0 px-5">
                    <div className="w-[700px] md:h-[350px] h-[200px] overflow-hidden bg-white rounded-lg shadow-lg">
                        <img className="w-full h-full" src={educist} alt="Project1" />
                    </div>
                </div>
            )}
            {showTechoverflowModal && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center lg:px-0 px-5">
                    <div className="w-[700px] md:h-[350px] h-[200px] overflow-hidden bg-white rounded-lg shadow-lg">
                        <img className="w-full h-full" src={techoverflow2} alt="Project2" />
                    </div>
                </div>
            )}
            {showWeatherModal && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center lg:px-0 px-5">
                    <div className="w-[700px] md:h-[350px] h-[200px] overflow-hidden bg-white rounded-lg shadow-lg">
                        <img className="w-full h-full" src={weather2} alt="Project3" />
                    </div>
                </div>
            )}
            {showNetflixModal && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center lg:px-0 px-5">
                    <div className="w-[700px] md:h-[350px] h-[200px] overflow-hidden bg-white rounded-lg shadow-lg">
                        <img className="w-full h-full" src={netflix2} alt="Project4" />
                    </div>
                </div>
            )}
            {showPortfolioModal && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center lg:px-0 px-5">
                    <div className="w-[700px] md:h-[350px] h-[200px] overflow-hidden bg-white rounded-lg shadow-lg">
                        <img className="w-full h-full" src={portfolio4} alt="Project5" />
                    </div>
                </div>
            )}
            {showPortfolio2Modal && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center lg:px-0 px-5">
                    <div className="w-[700px] md:h-[350px] h-[200px] overflow-hidden bg-white rounded-lg shadow-lg">
                        <img className="w-full h-full" src={portfolio3} alt="Project6" />
                    </div>
                </div>
            )}


        </>
    )
}

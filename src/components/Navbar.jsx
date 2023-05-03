import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="bg-gray-800 py-3 fixed top-0 w-full z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="text-white font-normal text-xl">ABPortfolio</div>
                    <div className="flex justify-end lg:hidden">
                        <button
                            className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
                            onClick={toggleMenu}
                        >
                            <svg
                                className="h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect y="4" width="24" height="2" />
                                <rect y="11" width="24" height="2" />
                                <rect y="18" width="24" height="2" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:w-auto">
                        <div className="text-gray-300 hover:bg-gray-600 cursor-pointer hover:text-white px-3 py-2 rounded-2xl text-md font-normal">
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Home
                            </Link>
                        </div>
                        <div className="text-gray-300 hover:bg-gray-600 cursor-pointer hover:text-white px-3 py-2 rounded-2xl text-md font-normal">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                About
                            </Link>
                        </div>
                        <div className="text-gray-300 hover:bg-gray-600 cursor-pointer hover:text-white px-3 py-2 rounded-2xl text-md font-normal">
                            <Link
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Skills
                            </Link>
                        </div>
                        <div className="text-gray-300 hover:bg-gray-600 cursor-pointer hover:text-white px-3 py-2 rounded-2xl text-md font-normal">
                            <Link
                                activeClass="active"
                                to="experience"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Experience
                            </Link>
                        </div>
                        <div className="text-gray-300 hover:bg-gray-600 cursor-pointer hover:text-white px-3 py-2 rounded-2xl text-md font-normal">
                            <Link
                                activeClass="active"
                                to="certifications"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Certifications
                            </Link>
                        </div>
                        <div className="text-gray-300 hover:bg-gray-600 cursor-pointer hover:text-white px-3 py-2 rounded-2xl text-md font-normal">
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Projects
                            </Link>
                        </div>
                        <div className="text-gray-300 hover:bg-gray-600 cursor-pointer hover:text-white px-3 py-2 rounded-2xl text-md font-normal">
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>

                <div
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } lg:hidden bg-gray-800 px-2 pt-2 pb-3 flex justify-center items-center flex-col`}
                >
                    <div className="text-gray-300 hover:bg-gray-600 cursor-pointer hover:text-white px-3 py-2 rounded-2xl text-sm font-normal">
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Home
                        </Link>
                    </div>
                    <div className="text-gray-300 hover:bg-gray-600 cursor-pointer hover:text-white px-3 py-2 rounded-2xl text-sm font-normal">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            About
                        </Link>
                    </div>
                    <div className="text-gray-300 hover:bg-gray-600 cursor-pointer hover:text-white px-3 py-2 rounded-2xl text-sm font-normal">
                        <Link
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Skills
                        </Link>
                    </div>
                    <div className="text-gray-300 hover:bg-gray-600 cursor-pointer hover:text-white px-3 py-2 rounded-2xl text-sm font-normal">
                        <Link
                            activeClass="active"
                            to="experience"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Experience
                        </Link>
                    </div>
                    <div className="text-gray-300 hover:bg-gray-600 cursor-pointer hover:text-white px-3 py-2 rounded-2xl text-sm font-normal">
                        <Link
                            activeClass="active"
                            to="certifications"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Certifications
                        </Link>
                    </div>
                    <div className="text-gray-300 hover:bg-gray-600 cursor-pointer hover:text-white px-3 py-2 rounded-2xl text-sm font-normal">
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Projects
                        </Link>
                    </div>
                    <div className="text-gray-300 hover:bg-gray-600 cursor-pointer hover:text-white px-3 py-2 rounded-2xl text-sm font-normal">
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}


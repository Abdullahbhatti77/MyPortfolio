import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const NavigationItem = ({ to, label }) => (
  <div className="text-gray-300 hover:bg-gray-600 cursor-pointer hover:text-white px-2 py-1 rounded-md text-md font-normal">
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      {label}
    </Link>
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "experience", label: "Experience" },
    { to: "certifications", label: "Certifications" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="bg-slate-700 py-3 fixed top-0 w-full z-10">
        <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-16 xl:px-0 flex justify-between items-center">
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
          <div className="hidden lg:flex lg:items-center lg:w-auto space-x-3">
            {navItems.map((item, index) => (
              <NavigationItem key={index} {...item} />
            ))}
          </div>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:hidden bg-gray-800 px-2 pt-2 pb-3 flex justify-center items-center flex-col`}
        >
          {navItems.map((item, index) => (
            <NavigationItem key={index} {...item} />
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { RiCloseLine } from 'react-icons/ri';
import {MdOutlineCancel} from 'react-icons/md'
import { Link } from 'react-router-dom';

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <div className="fixed top-0 right-0 z-50 ">
      <button
        className="p-5 text-gray-800"
        onClick={handleClick}
      >
        {isOpen ? <RiCloseLine size={24} /> : <FiMenu size={24}/>}
      </button>
      {isOpen && (
        <div className="fixed top-0 right-0 h-screen w-64 bg-gray-600 text-white flex flex-col items-center justify-center">
            <MdOutlineCancel className="absolute top-0 right-0 m-4 text-white cursor-pointer" size={24} onClick={handleClick} />
          <Link to="/" className="py-2 hover:text-gray-200">Home</Link>
          <Link to="/about" className="py-2 hover:text-gray-200">About</Link>
          <Link to="/contact" className="py-2 hover:text-gray-200">Contact</Link>
        </div>
        
      )}
    </div>
  );
};

export default Toggle;

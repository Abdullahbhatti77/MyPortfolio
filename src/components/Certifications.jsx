import React from 'react'
import c1 from '../assets/c1.png'
import reactcert from '../assets/reactcert.png'
import devops from '../assets/devops.png'
import seocert from '../assets/seocert.png'
import reactcourse from '../assets/reactcourse.png'
import community from '../assets/community.png'
import { useState } from 'react'

export default function Certifications() {
  const [showC1Modal, setShowC1Modal] = useState(false)
  const [showReactModal, setShowReactModal] = useState(false)
  const [showDevopsModal, setShowDevopsModal] = useState(false)
  const [showSeoModal, setShowSeoModal] = useState(false)
  const [showReactCourseModal, setShowReactCourseModal] = useState(false)
  const [showCommunityModal, setShowCommunityModal] = useState(false)

  const handleC1Image = () => {
    setShowC1Modal(true);
    document.addEventListener("click", handleOutsideClickC1);
  };
  const handleReactImage = () => {
    setShowReactModal(true);
    document.addEventListener("click", handleOutsideClickReact);
  };
  const handleDevopsImage = () => {
    setShowDevopsModal(true);
    document.addEventListener("click", handleOutsideClickDevops);
  };
  const handleSeoImage = () => {
    setShowSeoModal(true);
    document.addEventListener("click", handleOutsideClickSeo);
  };
  const handleReactCourseImage = () => {
    setShowReactCourseModal(true);
    document.addEventListener("click", handleOutsideClickReactCourse);
  };
  const handleCommunityImage = () => {
    setShowCommunityModal(true);
    document.addEventListener("click", handleOutsideClickCommunity);
  };

  const handleOutsideClickC1 = (event) => {
    if (!event.target.closest(".rounded-lg")) {
      setShowC1Modal(false);
      document.removeEventListener("click", handleOutsideClickC1);
    }
  };
  const handleOutsideClickReact = (event) => {
    if (!event.target.closest(".rounded-lg")) {
      setShowReactModal(false);
      document.removeEventListener("click", handleOutsideClickReact);
    }
  };
  const handleOutsideClickDevops = (event) => {
    if (!event.target.closest(".rounded-lg")) {
      setShowDevopsModal(false);
      document.removeEventListener("click", handleOutsideClickDevops);
    }
  };
  const handleOutsideClickSeo = (event) => {
    if (!event.target.closest(".rounded-lg")) {
      setShowSeoModal(false);
      document.removeEventListener("click", handleOutsideClickSeo);
    }
  };
  const handleOutsideClickReactCourse = (event) => {
    if (!event.target.closest(".rounded-lg")) {
      setShowReactCourseModal(false);
      document.removeEventListener("click", handleOutsideClickReactCourse);
    }
  };
  const handleOutsideClickCommunity = (event) => {
    if (!event.target.closest(".rounded-lg")) {
      setShowCommunityModal(false);
      document.removeEventListener("click", handleOutsideClickCommunity);
    }
  };


  return (
    <>
      <div className=' bg-[#EEEEEE] lg:px-20 py-5'>
        <h2 className='flex justify-center text-4xl font-light' id="certifications" data-aos="slide-down" data-aos-duration="1000">Certifications</h2>
        <div className='grid justify-center grid-cols-1 gap-7 md:mt-0 mt-8 md:grid-cols-3 lg:grid-cols-4 md:p-10 px-5'>

          <div className='flex justify-center hover:scale-105 hover:shadow-xl transition duration-400 ease-in-out'>
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
              <img className="w-full md:h-[76%] cursor-pointer" src={c1} alt="AWS Certificate" onClick={handleC1Image} />
              <div className="px-4 py-2">
                <div className="text-md font-semibold">AWS Project</div>
              </div>
            </div>
          </div>

          <div className='flex justify-center hover:scale-105 hover:shadow-xl transition duration-400 ease-in-out'>
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
              <img className="w-full md:h-[76%] cursor-pointer" src={devops} alt="Devops Certificate" onClick={handleDevopsImage} />
              <div className="px-4 py-2">
                <div className="text-md font-semibold">Introduction to DevOps</div>

              </div>
            </div>
          </div>

          <div className='flex justify-center hover:scale-105 hover:shadow-xl transition duration-400 ease-in-out'>
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
              <img className="w-full md:h-[76%] cursor-pointer" src={reactcourse} alt="React Certificate" onClick={handleReactCourseImage} />
              <div className="px-4 py-2">
                <div className="text-md font-semibold">Build Your First React Website</div>

              </div>
            </div>
          </div>

          <div className='flex justify-center hover:scale-105 hover:shadow-xl transition duration-400 ease-in-out'>
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
              <img className="w-full md:h-[76%] cursor-pointer" src={seocert} alt="SEO Certificate" onClick={handleSeoImage} />
              <div className="px-4 py-2">
                <div className="text-md font-semibold">Increase SEO Traffic with WordPress</div>

              </div>
            </div>
          </div>

          <div className='flex justify-center hover:scale-105 hover:shadow-xl transition duration-400 ease-in-out'>
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
              <img className="w-full md:h-[76%] cursor-pointer" src={reactcert} alt="React Certificate" onClick={handleReactImage} />
              <div className="px-4 py-2">
                <div className="text-md font-semibold">Getting Started with ReactJS Components</div>

              </div>
            </div>
          </div>

          <div className='flex justify-center hover:scale-105 hover:shadow-xl transition duration-400 ease-in-out'>
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
              <img className="w-full md:h-[76%] cursor-pointer" src={community} alt="Community Certificate" onClick={handleCommunityImage} />
              <div className="px-4 py-2">
                <div className="text-md font-semibold">Completed 80 hours of community work</div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {showC1Modal && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center lg:px-0 px-5">
          <div className="w-[600px] md:h-[350px] h-[200px] overflow-hidden bg-white rounded-lg shadow-lg">
            <img className="w-full h-full" src={c1} alt="AWS Certificate" />
          </div>
        </div>
      )}
      {showReactModal && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center lg:px-0 px-5">
          <div className="w-[600px] md:h-[350px] h-[200px] overflow-hidden bg-white rounded-lg shadow-lg">
            <img className="w-full h-full" src={reactcert} alt="React Certificate" />
          </div>
        </div>
      )}
      {showReactCourseModal && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center lg:px-0 px-5">
          <div className="w-[600px] md:h-[350px] h-[200px] overflow-hidden bg-white rounded-lg shadow-lg">
            <img className="w-full h-full" src={reactcourse} alt="React Certificate" />
          </div>
        </div>
      )}
      {showDevopsModal && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center lg:px-0 px-5">
          <div className="w-[600px] md:h-[350px] h-[200px] overflow-hidden bg-white rounded-lg shadow-lg">
            <img className="w-full h-full" src={devops} alt="Devops Certificate" />
          </div>
        </div>
      )}
      {showSeoModal && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center lg:px-0 px-5">
          <div className="w-[600px] md:h-[350px] h-[200px] overflow-hidden bg-white rounded-lg shadow-lg">
            <img className="w-full h-full" src={seocert} alt="SEO Certificate" />
          </div>
        </div>
      )}
      {showCommunityModal && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center lg:px-0 px-5">
          <div className="w-[600px] md:h-[350px] h-[200px] overflow-hidden bg-white rounded-lg shadow-lg">
            <img className="w-full h-full" src={community} alt="Community Certificate" />
          </div>
        </div>
      )}
    </>
  )
}

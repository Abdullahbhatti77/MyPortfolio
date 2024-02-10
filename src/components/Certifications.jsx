import React, { useState } from "react";
import c1 from "../assets/c1.png";
import reactcert from "../assets/reactcert.png";
import devops from "../assets/devops.png";
import seocert from "../assets/seocert.png";
import reactcourse from "../assets/reactcourse.png";
import community from "../assets/community.png";

const certificationsData = [
  { image: c1, alt: "AWS Project" },
  { image: reactcert, alt: "Getting Started with ReactJS Components" },
  { image: devops, alt: "Introduction to DevOps" },
  { image: seocert, alt: "Increase SEO Traffic with WordPress" },
  { image: reactcourse, alt: "Build Your First React Website" },
  { image: community, alt: "Community Service Completion" },
];

export default function Certifications() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCertification, setSelectedCertification] = useState("");

  const handleImageClick = (image) => {
    setSelectedCertification(image);
    setShowModal(true);
    document.addEventListener("click", handleOutsideClick);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest(".rounded-lg")) {
      setShowModal(false);
      document.removeEventListener("click", handleOutsideClick);
    }
  };

  return (
    <>
      <div className="bg-[#FCFCFC] lg:px-6 py-5 xl:px-20">
        <h2
          className="flex justify-center text-4xl font-bold text-slate-700"
          id="certifications"
        >
          Certifications
        </h2>
        <div className="grid justify-center grid-cols-1 gap-7 md:mt-0 mt-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:p-10 px-5">
          {certificationsData.map((certification, index) => (
            <div
              key={index}
              className="flex justify-center hover:scale-105 transition duration-400 ease-in-out"
            >
              <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg w-full">
                <img
                  className="w-full md:h-[76%] cursor-pointer"
                  src={certification.image}
                  alt={certification.alt}
                  onClick={() => handleImageClick(certification.image)}
                />
                <div className="flex items-center justify-center py-3 px-4">
                  <div className="text-md font-semibold text-center">
                    {certification.alt.replace(" Certificate", "")}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center lg:px-0 px-5">
          <div className="w-[600px] md:h-[350px] h-[200px] overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              className="w-full h-full"
              src={selectedCertification}
              alt="Certificate"
            />
          </div>
        </div>
      )}
    </>
  );
}

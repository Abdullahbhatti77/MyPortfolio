import React from "react";
import techoverflow from "../assets/techoverflow.jfif";
import edtest from "../assets/edtest.jfif";
import programmers_force from "../assets/pf-logo.png";

const experienceData = [
  {
    companyName: "Programmers Force",
    logo: programmers_force,
    role: "Associate Software Engineer",
    date: "Sep 2023 - Present",
    description:
      "Collaborating with a team of developers and designers to create responsive and user-friendly websites using Vue JS, VueX, Vuetify, python and selenium for web scraping.",
    responsibilities: [
      "Api Integration of front-end with back-end.",
      "Converting the designs into pixel perfect websites.",
      "Improving UI/UX of the websites.",
      "Writing crawlers for web scraping using python.",
      "Documenting the code for future reference.",
    ],
  },
  {
    companyName: "EdTest Testing Services",
    logo: edtest,
    role: "Full Stack Developer",
    date: "Sep 2022 - July 2023",
    description:
      "It was my final year project. Gained exposure of working with different technologies which includes (React.js, MongoDB, Node.js, Next.js, Tailwind CSS, Git, Cloudinary).",
    responsibilities: [
      "Quality Assurance.",
      "Creating user interface.",
      "Creating custom Api's.",
      "Deployment on cloud platforms.",
      "Implementing SignUp, Sign In, Forgot password functionalities.",
    ],
  },
  {
    companyName: "TechOverflow",
    logo: techoverflow,
    role: "Trainee Frontend Developer",
    date: "Mar 2023 - May 2023",
    description:
      "Cooperated with a team of developers and designers to create responsive and user-friendly websites using React JS, Vue JS, Tailwind CSS, Bootstrap.",
    responsibilities: [
      "Converting the designs into working site.",
      "Constantly delivering and receiving the feedback.",
      "Work on the feedback points.",
      "Making the required changes suggested by Project Manager.",
      "Creating reusable code using React JS.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="lg:px-6 bg-[#FCFCFC] xl:px-20 md:px-2">
      <h2
        className="flex justify-center text-4xl font-bold text-slate-700"
        id="experience"
      >
        Experience
      </h2>
      <div className="grid grid-cols-1 md:mt-0 mt-8 gap-7 lg:grid-cols-2 md:p-10 px-5">
        {experienceData.map((experience, index) => (
          <div key={index} className="rounded-xl shadow-xl p-5 bg-white">
            <div className="flex xl:flex-row flex-col">
              <div className="flex justify-center items-center flex-col">
                <div className="w-32 flex items-center justify-center flex-col">
                  <img
                    src={experience.logo}
                    className="w-24 h-24"
                    alt={`${experience.companyName} Logo`}
                  />
                  <h3 className="text-lg font-bold mt-2 text-slate-600 text-center">
                    {experience.companyName}
                  </h3>
                  <p className="text-xs mt-1 text-[#8A8A8A]">
                    {experience.date}
                  </p>
                </div>
              </div>
              <div className="pl-5">
                <h3 className="text-2xl font-bold xl:mt-0 mt-5">
                  {experience.role}
                </h3>
                <p className="text-sm mt-2 lg:h-[65px] xl:h-auto">
                  {experience.description}
                </p>
                <h3 className="py-1 text-md font-bold">Responsibilities:</h3>
                <ul className="list-disc pl-10 text-sm">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-10 bg-gray-100 rounded-lg shadow-lg"
      style={{ boxShadow: "0 4px 20px rgba(0, 0, 139, 0.5)" }}
    >
      <h1 className="text-4xl font-extrabold text-center text-gray-800 border-b-2 border-blue-500 pb-4">
        About Us
      </h1>
      <div className="mt-8 p-2">
        <span className="block text-2xl font-semibold text-gray-700 text-center">
          Hello! My name is Jyoti Tiwari
        </span>
        <p className="text-gray-600 text-lg mt-4 leading-relaxed text-justify">
          I am a self-taught programmer with a passion for learning and
          exploring new technologies. I have a strong background in FrontEnd
          Development and improving full-stack development and am always eager
          to expand my skillset and take on new challenges. As a dedicated and
          driven individual, I am constantly seeking out opportunities to grow
          and improve as a programmer. I am an experienced software developer
          with a strong foundation in front-end technologies, including HTML,
          CSS, JavaScript (jQuery), WordPress, and React.js with Redux and
          Hooks. I am proficient in backend development using PHP (OOP and
          RESTful APIs) and skilled in database management with SQL and MongoDB.
          I have demonstrated expertise in utilizing tools such as Git, Visual
          Studio, Sublime Text, and Microsoft Office Suite (Excel and Word).
          Additionally, I have experience in creating responsive designs using
          Bootstrap CSS and developing full REST APIs. I am proficient in
          working with Linux and Windows operating systems to support diverse
          development environments.
        </p>
      </div>
      <div className="mt-10">
        <h1 className="text-blue-500 font-semibold text-2xl text-center mb-6">
          My Experience
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="font-semibold text-xl text-gray-700">
            Aara Groups Pvt Ltd, Indira Nagar Lucknow— Internship Program
            <span className="text-sm text-gray-500">
              {" "}
              (May 2024 - October 2024)
            </span>
          </h2>
          <p className="text-gray-600 text-base mt-3 leading-relaxed text-justify ">
            This Internship Program is 5 months of LIVE PROJECT work where I
            worked on the React JS live Projects Mstore and many projects using
            React JS with Tailwind CSS, RESTful API, Redux, Hooks, and Map. This
            training included 3 months of sponsored training during which I
            worked on live frontend and backend development projects, building
            multiple websites using React JS, Tailwind CSS, RESTful APIs, and
            Redux under the guidance of a trainer.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mt-8">
          <h2 className="font-semibold text-xl text-gray-700">
            Currently working as a web developer in FREELANCER
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;

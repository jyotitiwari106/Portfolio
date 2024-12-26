import React, { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiPhpFill, RiReactjsLine } from "react-icons/ri";
import { TbBrandMysql, TbBrandNodejs } from "react-icons/tb";
import { ReactTyped } from "react-typed";
import img from "../../assets/jyoti.jpg";

const Home = () => {
  const [typed, setTyped] = useState();
  return (
    <div
      name="Home"
      className="max-w-screen-2xl pt-5 container mx-auto px-4 md:px-20 py-10 bg-gray-100 rounded-lg shadow-lg"
      style={{ boxShadow: "0 4px 20px rgba(0, 0, 139, 0.5)" }} // Navy blue shadow
    >
      <div className="flex md:flex-row flex-col-reverse justify-center items-center">
        <div className="md:mt-24 space-y-4 md:w-[50%] p-4">
          <span className="text-xl font-semibold text-gray-700">Welcome</span>
          <div className="flex gap-2 text-2xl md:text-4xl font-semibold">
            <h1>Hello, I'm a</h1>
            <ReactTyped
              typedRef={setTyped}
              strings={["Web Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
              className="text-blue-600 font-bold"
            />
          </div>
          <p className="text-gray-600 text-lg mt-4 leading-relaxed text-justify">
            I am a front-end developer with over one year of proven experience
            in designing and implementing engaging user interfaces. I specialize
            in Search Engine Optimization (SEO), React.js, Tailwind CSS, and
            JavaScript, with a strong passion for creating interactive and
            visually appealing web applications. My expertise includes
            developing high-scale applications using Next.js and React.js,
            technologies I particularly enjoy working with. I am committed to
            delivering seamless functionality and exceptional user experiences
            through modern front-end solutions.
          </p>
          <div className="flex justify-between mt-6">
            <div>
              <p className="text-gray-700 font-medium">Available on</p>
              <div className="flex gap-4 mt-2">
                <a href="https://www.facebook.com" target="_blank">
                  <FaFacebook className="h-8 w-8 text-blue-600 hover:text-blue-800 transition-colors cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                  <FaLinkedin className="h-8 w-8 text-blue-700 hover:text-blue-900 transition-colors cursor-pointer" />
                </a>
                <a href="https://www.github.com" target="_blank">
                  <FaGithub className="h-8 w-8 text-gray-800 hover:text-gray-600 transition-colors cursor-pointer" />
                </a>
              </div>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Currently working on</p>
              <div className="flex gap-5 mt-2">
                <RiReactjsLine className="h-8 w-8 text-blue-500 hover:text-blue-700 transition-colors cursor-pointer" />
                <TbBrandNodejs className="h-8 w-8 text-green-600 hover:text-green-800 transition-colors cursor-pointer" />
                <RiPhpFill className="h-8 w-8 text-indigo-500 hover:text-indigo-700 transition-colors cursor-pointer" />
                <TbBrandMysql className="h-8 w-8 text-yellow-600 hover:text-yellow-800 transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center md:pt-14 pt-3 w-[50%]">
          <img
            src={img}
            alt="Jyoti"
            className="shadow-xl border-4 border-gray-200 p-4 md:h-[300px] md:w-[250px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

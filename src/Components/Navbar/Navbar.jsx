import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
const Navbar = () => {
  const [menu, setMenu] = useState();
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 1,
      text: "About",
    },
    {
      id: 1,
      text: "Project",
    },
    {
      id: 1,
      text: "Experiance",
    },
    {
      id: 1,
      text: "Contact",
    },
  ];
  return (
    <div className=" container mx-auto px-4 md:px-20 sticky top-0 bg-white shadow-md z-30 ">
      <nav className="flex justify-between bg-white p-4 ">
        <div className="flex gap-3">
          <img
            src=""
            alt="J"
            className="font-normal text-green-900 text-xl w-10 h-10 bg-slate-500 rounded-full "
          />
          <div className="flex flex-col">
            <p className="font-semibold">JYOTI</p>
            <p className="font-medium text-sm">Web Developer</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 transition-transform duration-200 cursor-pointer font-semibold"
                key={id}
              >
                <Link
                  to={text}
                  smooth="true"
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          <div onClick={() => setMenu(!menu)} className="md:hidden">
            {menu ? <IoCloseSharp size={34} /> : <AiOutlineMenu size={34} />}
          </div>
        </div>
      </nav>
      {menu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setMenu(false)}
        ></div>
      )}
      {menu && (
        <div className="fixed top-0 right-0 bg-white h-screen w-[200px] shadow-md md:hidden z-30 transition-transform duration-300">
          <ul className="flex flex-col items-start px-4 space-y-6 mt-10 text-lg">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 transition-transform duration-200 font-semibold cursor-pointer"
                key={id}
              >
                <Link
                  to={text}
                  smooth="true"
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  onClick={() => setMenu(false)}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

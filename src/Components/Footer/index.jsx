import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <hr />
      <div name="footer" className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-24">
          <div className="flex flex-col justify-center items-center  ">
            <div className="flex gap-4 text-xl">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedinIn />
              <FaTwitter />
            </div>
            <div className="mt-5 flex items-center border-t-2 flex-col justify-center border-gray-700 pt-4 md:w-[27%] lg:p-0 p-4">
              <p>&copy; 2024 Your Company . All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

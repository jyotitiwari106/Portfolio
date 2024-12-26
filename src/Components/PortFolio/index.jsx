import React from "react";
import logo1 from "../../assets/jyoti.jpg";
import react from "../../assets/ract.png";
import php from "../../assets/php.jpg";
import python from "../../assets/python.png";
import java from "../../assets/java.png";

const Portfolio = () => {
  const itemcard = [
    {
      id: 1,
      logo: react,
      name: "React Js",
      para: "Loream ipsum, dolor sit amet concesteture adipisicing elit",
    },

    {
      id: 2,
      logo: php,
      name: "Php",
      para: "Loream ipsum, dolor sit amet concesteture adipisicing elit",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
      para: "Loream ipsum, dolor sit amet concesteture adipisicing elit",
    },
    {
      id: 4,
      logo: python,
      name: "javascript",
      para: "Loream ipsum, dolor sit amet concesteture adipisicing elit",
    },
  ];
  return (
    <div
      name="Project"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 p-4"
    >
      <h1 className="text-3xl font-bold mb-5"> Portfolio </h1>

      <p className="underline font-semibold">Featured Projects</p>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-5  mt-6 lg:p-0 p-2  ">
        {itemcard.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-2 justify-center text-center items-center border-4 shadow-xl rounded-lg cursor-pointer hover:scale-110 duration-300 md:h-[300px] md:[300px] "
          >
            <img
              src={item.logo}
              alt="item.name"
              className="h-[110px] w-[110px] rounded-full border-2 flex  mx-2 mt-2  "
            />
            <h1 className="font-bold text-xl mb-2 mx-2">{item.name}</h1>
            <p className="mx-2 ">{item.para}</p>
            <div className="flex px-6 py-4 space-x-4 pb-3 justify-center items-center">
              <button className="py-2 px-6 bg-slate-400 hover:bg-blue-500 text-white font-bold rounded">
                Visit Link
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

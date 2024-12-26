import React from "react";
import logo1 from "../../assets/jyoti.jpg";

const Experiance = () => {
  const itemcard = [
    {
      id: 1,
      logo: logo1,
      name: "React Js",
      para: "Loream ipsum, dolor sit amet concesteture adipisicing elit",
    },

    {
      id: 2,
      logo: logo1,
      name: "Php",
      para: "Loream ipsum, dolor sit amet concesteture adipisicing elit",
    },
    {
      id: 3,
      logo: logo1,
      name: "Java",
      para: "Loream ipsum, dolor sit amet concesteture adipisicing elit",
    },
    {
      id: 4,
      logo: logo1,
      name: "javascript",
      para: "Loream ipsum, dolor sit amet concesteture adipisicing elit",
    },
    {
      id: 5,
      logo: logo1,
      name: "javascript",
      para: "Loream ipsum, dolor sit amet concesteture adipisicing elit",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 "
    >
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5  mt-6  ">
        {itemcard.map((item) => (
          <div
            key={item.id}
            className="flex gap-2 lg:p-0 p-4 flex-col justify-center border-2 rounded-full md:h-[200px] md:w-[200px] h-[150px] w-[150px] items-center cursor-pointer  hover:scale-110 duration-300"
          >
            <img
              src={item.logo}
              alt="item.name"
              className="h-[80px] w-[80px] rounded-full   flex justify-center items-center mx-2  "
            />
            <div className="font-bold p-1">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiance;

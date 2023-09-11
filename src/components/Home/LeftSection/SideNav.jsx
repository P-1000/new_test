import React, { useEffect, useState } from "react";

import homepng from "../../../assets/home/homepng.png";
import course from "../../../assets/home/corse.png";
import beacon from "../../../assets/home/beacon.png";
import mobile from "../../../assets/home/mobile.png";
import schedule from "../../../assets/home/calendar.png";
import Settings from "../../../assets/home/Settings.png";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const buttons = [
    { icon: homepng, label: "Dashboard" },
    // { icon: course, label: "Course" },
    { icon: beacon, label: "Announcements" },
    { icon: mobile, label: "Grades" },
    { icon: Settings, label: "Attendance" },
    { icon: schedule, label: "Schedule" },
    { icon: Settings, label: "Events" },
  ];

  const [activeButton, setActiveButton] = useState(0);

  const navigate = useNavigate();

  const handleButtonClick = (index) => {
    setActiveButton(index);
    navigate(`/${buttons[index].label.toLocaleLowerCase()}`);
  };

  return (
    <div className="  sm:w-[11rem]  overflow-y-scroll h-screen scrollbar-hidden">
      <div className="flex items-center justify-start gap-3">
        {/* <img
          src="https://cdn.dribbble.com/userupload/2745586/file/original-7f0fa031e809b3802ff3a65736b38259.png?resize=52x"
          alt=""
        /> */}
        <div className=" relative flex   ">
          <div className="w-7 h-7  rotate-45   rounded-md z-[-1]  bg-purple-300"></div>
          <div className="w-7 h-7  rotate-45 -ml-3 rounded-md  bg-purple-700"></div>
        </div>
        <h1 className=" text-lg font-medium text-gray-500">AkademY</h1>
      </div>
      <div className="flex flex-col gap-2.5 font-lato py-10 justify-center text-md">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`py-3 px-4 hover:bg-[#e9e3ff69] hover:shadow-sm  hover:transition-all transition-all relative flex rounded-lg items-center ${
              activeButton === index
                ? "bg-[#e3dbff] shadow-md "
                : "bg-[#fbfbfb] text-gray-600"
            }`}
            style={{ userSelect: "none" }}
          >
            <img className="h-5 w-5 mx-2 " src={button.icon} alt="" />
            <p>{button.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideBar;

import React, { useEffect, useState } from "react";

import logo from "../../../assets/home/lms.svg";
import { useNavigate } from "react-router-dom";
import {  FiSettings } from "react-icons/fi";
import {  BsTrophy, BsCalendarWeek } from "react-icons/bs";
import {  SiGoogleclassroom } from "react-icons/si";
import {MdSpaceDashboard} from "react-icons/md";
import {HiOutlineSpeakerphone} from "react-icons/hi";
import LogoAnimation from "./Logoani";
const SideBar = () => {
  const buttons = [
    { icon: <MdSpaceDashboard/> , label: "Dashboard"},
    // { icon: course, label: "Course" },
    { icon: <HiOutlineSpeakerphone/>, label: "Announcements" },
    { icon: <BsTrophy/>, label: "Grades" },
    { icon: <SiGoogleclassroom/>, label: "Attendance" },
    { icon: <BsCalendarWeek/>, label: "Schedule" },
    { icon: <FiSettings/>, label: "Events" },
  ];

  const [activeButton, setActiveButton] = useState(0);

  const navigate = useNavigate();

  const handleButtonClick = (index) => {
    setActiveButton(index);
    navigate(`/${buttons[index].label.toLocaleLowerCase()}`);
  };

  

  return (
    <div className="  sm:w-[20rem] p-12  overflow-y-scroll h-screen scrollbar-hidden fixed border-r-2">
      <div className="flex items-center justify-start gap-3">
        {/* <img
          src="https://cdn.dribbble.com/userupload/2745586/file/original-7f0fa031e809b3802ff3a65736b38259.png?resize=52x"
          alt=""
        /> */}

        {/* <h1 className=" text-lg font-bold text-gray-500 tracking-widest">LMSEDU</h1> */}
        {/* <img src={logo}
        className="overflow-hidden"
        /> */}
        <LogoAnimation/>
      </div>
      <div className="flex flex-col gap-2.5 font-lato py-10 justify-center text-md">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`py-3 px-4 hover:bg-cyan-800 hover:text-white hover:shadow-sm font-lg hover:transition-all transition-all relative flex rounded-lg items-center ${
              activeButton === index
                ? "bg-sky-800 shadow-lg text-white scale-110 font-xl"
                : "bg-[#fbfbfb] text-gray-600"
            }`}
            style={{ userSelect: "none" }}
          >
            {/* <img className="h-5 w-5 mx-2 " src={button.icon} alt="" /> */}
            <div className="h-5 w-5 flex items-center ml-2">{button.icon}</div>
            <p>{button.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideBar;

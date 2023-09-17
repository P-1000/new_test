import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineNotificationAdd } from "react-icons/md";
import AttenDanceCards from "./AttenDanceCards";
import AttendanceDisplayCard from "./AttendanceSingleCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AttenComp = () => {
  const path = window.location.pathname;
  const [atn, setAtn] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (path == "/attendance") {
      setAtn(true);
    } else {
      setAtn(false);
    }
  }, [path]);

  console.log(atn);

  return (
    <div className="   py-4     sm:w-[50rem] w-full">
      <div className=" sm:w-[100%] cursor-pointer  ">
        <motion.div
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className=" "
        >
          <h1 className=" flex gap-5 text-lg sm:text-2xl pb-3 sm:pb-0 text-black/80 font-semibold  sm:mt-2">
            <motion.div
              initial={{ y: -25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              onClick={() => navigate("/attendance")}
              className={`${
                atn
                  ? "border-b-4 cursor-pointer transition-colors border-red-900 "
                  : "bg-none"
              } `}
            >
              Attendance
            </motion.div>
            <div
              onClick={() => navigate("/bunk")}
              className={`${
                atn
                  ? "bg-none"
                  : "border-b-4 cursor-pointer transition-colors border-red-900 "
              } `}
            >
              Bunk Calculator
            </div>
          </h1>
        </motion.div>
      </div>
      <div className="flex"></div>
    </div>
  );
};

export default AttenComp;

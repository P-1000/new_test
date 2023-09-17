import React from "react";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import CircularProgressBar from "../Home/RightSection/ProgressBar";
import { motion } from "framer-motion";
import CP from "../../Utils/CircularProgress";

const AttendanceDisplayCard = ({
  courseName,
  attendedClasses,
  totalClasses,
  attendancePercentage,
}) => {
  // const attendancePercentage = (attendedClasses / totalClasses) * 100;
  function parseToInt(str) {
    return parseInt(str, 10);
  }
  return (
    <motion.div className="bg-white rounded-lg shadow-md p-4 w-72">
      <div className="flex justify-between items-center mb-2">
        <div className="text-sm text-gray-500">
          {attendedClasses} | {totalClasses} Attended
        </div>
        <div className="bg-gray-800 text-white rounded-full p-2 cursor-pointer">
          <AiOutlineArrowsAlt className="font-bold" />
        </div>
      </div>
      <div className="flex items-center justify-center mb-4">
        <div className="relative">
          <div className="absolute -mx-5">
            <div className="h-32 w-32 flex items-center justify-center  mx-auto">
              <div className="text-xl font-semibold pb-4">
                <CP attendance={parseToInt(attendancePercentage)} />
              </div>
            </div>
          </div>
          <svg
            className="animate-spin h-24 w-24 text-indigo-200"
            viewBox="0 0 24 24"
          ></svg>
        </div>
      </div>
      <div className="text-center">
        <p className="text-xs font-semibold">{courseName}</p>
      </div>
    </motion.div>
  );
};

export default AttendanceDisplayCard;

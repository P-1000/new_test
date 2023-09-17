import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { HiPaperAirplane } from "react-icons/hi";
import { IoCardOutline } from "react-icons/io5";
import { IoCloudDone } from "react-icons/io5";
import { AiOutlineCode } from "react-icons/ai";
import { FaCodeBranch } from "react-icons/fa";
import { SiXcode } from "react-icons/si";
import { SiFreecodecamp } from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MyCourse = () => {
  const atten = useSelector((state) => state.attendance);
  const attendance = atten.initialAttendance.Attendance_Summary;
  console.log(attendance);
  const iconComponents = [
    AiOutlineSearch,
    MdOutlineNotificationAdd,
    AiOutlineCode,
    IoCloudDone,
    FaCodeBranch,
    BsFillJournalBookmarkFill,
    IoCardOutline,
    DiDatabase,
    HiPaperAirplane,
  ];
  const colorClasses = [
    "bg-orange-500",
    "bg-pink-500",
    "bg-red-500",
    "bg-green-500",
    "bg-yellow-500",
  ];

  function shuffleArray(array) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  let a = 0.1;

  // Shuffled arrays
  const shuffledIcons = shuffleArray(iconComponents);
  const shuffledColors = shuffleArray(colorClasses);

  let iconIndex = 0;
  let colorIndex = 0;

  return (
    <div className="mt-8 w-[100%] rounded-lg p-10 ">
      <div className="flex justify-between ">
        <h2 className="text-xl font-semibold">My Course</h2>
        <p className="text-sky-800">View All</p>
      </div>
      <div className="mt-6 flex flex-col justify-between ">
        <div className=" sm:text-sm text-xs mb-2 text-gray-600 flex justify-between ">
          <p>Course Name</p>
          <div className="flex    justify-between  md:justify-between sm:w-[50%] ">
            <p className="xl:pr-[6rem] hidden sm:block">Start</p>
            <p className="xl:pr-[7.5rem] hidden sm:block">Rate</p>
            <p className="hidden pr-[1.2rem] sm:block">Level</p>
          </div>
        </div>

        {attendance?.map((item) => {
          const IconComponent = shuffledIcons[iconIndex];
          const bgColorClass = shuffledColors[colorIndex];

          // Update index for next iteration
          iconIndex = (iconIndex + 1) % shuffledIcons.length;
          colorIndex = (colorIndex + 1) % shuffledColors.length;

          return (
            <Link key={item.courseCode} to={`/c/${item.courseCode}/units`}>
              <motion.div
                initial={{ opacity: 0, y: 100, x: -30 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{
                  duration: 0.1,
                  ease: "easeIn", // Gradual acceleration and deceleration
                  delay: (a += 0.099),
                }}
                className="mt-2 mb-1 flex justify-between items-center p-3 rounded-2xl hover:scale-105 hover:shadow-lg border transition-all"
              >
                <div className="flex gap-2 sm:gap-4 items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 70, x: -50 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut", // Gradual acceleration and deceleration
                      delay: (a += 0.1),
                    }}
                    className={`shadow-xl ${bgColorClass} p-3 rounded-lg`}
                  >
                    <IconComponent
                      className={`  text-white sm:w-6 sm:h-6 h-4 w-4`}
                    />
                  </motion.div>
                  <div className="flex-col flex">
                    <p className="text-xs sm:w-8/12">{item.courseCode}</p>
                    <p className="text-xs">
                      {item.courseName.length > 15
                        ? `${item.courseName.substring(0, 30)}...`
                        : item.courseName}
                    </p>
                  </div>
                </div>

                <div className="flex sm:text-base text-sm justify-between items-center sm:w-[50%]">
                  <p className="text-sm hidden sm:block">May 12</p>
                  <p className="text-sm hidden sm:block">4.5</p>
                  <p className="text-sm hidden sm:block">Beginner</p>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MyCourse;

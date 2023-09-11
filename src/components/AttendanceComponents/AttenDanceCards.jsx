import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineNotificationAdd } from "react-icons/md";
import {motion} from 'framer-motion'

const courseData = [
  {
    icon: <BiCodeAlt className="text-blue-500 w-6 h-6" />,
    color: "bg-blue-200",
    name: "Web Design",
    chapters: "6 Chapters",
    date: "May 12",
    rating: "4.5",
    level: "Beginner",
  },
  {
    icon: <MdOutlineNotificationAdd className="text-orange-500 w-6 h-6" />,
    color: "bg-orange-200",
    name: "Notification",
    chapters: "3 Chapters",
    date: "June 5",
    rating: "3.8",
    level: "Intermediate",
  },
];

const AttenDanceCards = () => {
  return (
    <div className="mt-8 w-[100%]">
      <div className="flex justify-between ">
        <h2 className="text-xl font-medium">My Course</h2>
        <p className="text-purple-600">View All</p>
      </div>
      <div className="mt-6">
        {courseData.map((course, index) => (
          <div
            key={index}
            className={`mt-2 mb-1 flex justify-between items-center `}
          >
            <div className="flex gap-2 items-center justify-center">
              <div className={`${course.color} shadow-xl p-3 rounded-lg`}>
                {course.icon}
              </div>
              <div className="flex-col flex">
                <p className="sm:text-lg text-sm">{course.name}</p>
                <p className="text-xs">{course.chapters}</p>
              </div>
            </div>
            <div className="flex sm:text-base text-xs justify-between items-center w-[50%]">
              <p>{course.date}</p>
            <p>{course.rating}</p>
              <p>{course.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttenDanceCards;
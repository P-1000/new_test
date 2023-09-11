import React from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarker,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Announcement = ({ announcement }) => {
  let a = 0.5;

  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: a += 0.1, type: "spring" }}
      className="bg-white p-4 sm:p-6 md:p-8 my-4 shadow-lg rounded-lg "
    >
      <h2 className="text-xl sm:text-2xl font-semibold mb-2 hover:text-orange-500 transition-all">
        {announcement?.subject}
      </h2>
      <p className="text-gray-600 mb-2 mt-1 text-sm sm:text-base">
        {announcement?.body}
      </p>
      <div className="flex items-center text-gray-500 mt-2 sm:mt-4">
        <FaCalendarAlt className="mr-1" />
        <span>{announcement?.date}</span>
        {/* Uncomment these lines if needed */}
        {/* <FaClock className="mx-2" />
        <span>{announcement?.time}</span>
        <FaMapMarker className="mx-2" />
        <span>{announcement?.venue}</span>
        <a href={`mailto:${announcement?.email}`} className="ml-auto">
          <FaEnvelope className="text-blue-500" />
        </a> */}
      </div>
    </motion.div>
  );
};

export default Announcement;
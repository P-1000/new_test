import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const OverallStats = ({ studentData }) => {
  if (!studentData || !studentData.length) {
    return <div>No data available.</div>;
  }

  // Initialize grade count for each category
  const gradeCounts = {
    O: 0,
    "A+": 0,
    A: 0,
    B: 0,
    "B+": 0,
    "C+": 0,
    C: 0,
    D: 0,
    E: 0,
  };

  const inf = localStorage.getItem("info");
  const in6 = JSON.parse(inf);
  const in7 = in6.BasicDetails[0];
  const gpa = in7.CGPA;

  // Iterate through all terms
  studentData.forEach((term) => {
    term.grades.forEach((grade) => {
      // Increment the grade count for the category
      if (gradeCounts.hasOwnProperty(grade.grade)) {
        gradeCounts[grade.grade]++;
      }
    });
  });

  // Calculate the overall CGPA (Hardcoded for now)
  const overallCGPA = gpa;

  return (
    <motion.div
      initial={{ y: -10, x: -80, opacity: 0.01 }}
      animate={{ y: 0, x: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="p-4 flex justify-around 
     bg-white shadow-sm border rounded-md w-full flex-col sm:flex-row"
    >
      <div className="w-full sm:w-auto flex flex-col justify-center my-6">
        <CountUp
          start={0}
          end={overallCGPA}
          duration={0.7} // Duration in seconds
          decimals={2} // Number of decimal places
          useEasing={true}
          className="text-3xl sm:text-6xl font-bold text-green-600 " // Add your desired color class here
        />
        <p className="text-lg sm:text-2xl">CGPA</p>
      </div>

      <div className="mb-4 flex flex-col  justify-center items-center">
        <p className="font-semibold mb-3 text-left">Total Grades</p>
        <div className="grid grid-cols-3 gap-5">
          {Object.keys(gradeCounts).map((grade) => (
            <div
              key={grade}
              className="border
              hover:bg-gray-100/80 cursor-pointer
              hover:scale-105 transition-all duration-150
               shadow-sm px-5 py-2 rounded-md flex flex-col items-center"
            >
              <span className="font-bold"> {grade} </span>{" "}
              <span>{gradeCounts[grade]}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default OverallStats;

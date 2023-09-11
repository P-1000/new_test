import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CircularProgressCard = ({ tgpa, term }) => {
  const navigate = useNavigate();
  const [animateProgress, setAnimateProgress] = useState(false);
  const percentage = (tgpa / 3.5999) * 100; // Assuming TGPA is on a scale of 10
  const controls = useAnimation();

  useEffect(() => {
    if (animateProgress) {
      controls.start({
        strokeDasharray: `${percentage} 283`,
        stroke: getColorByTGPA(tgpa),
      });
    } else {
      controls.start({ strokeDasharray: `0 283` });
    }
  }, [animateProgress, percentage, tgpa, controls]);

  useEffect(() => {
    // Trigger the animation when the component mounts
    setAnimateProgress(true);
  }, []);

  // Define a function to get color based on TGPA range
  const getColorByTGPA = (tgpa) => {
    if (tgpa < 6) {
      return "#EF4444"; // Red
    } else if (tgpa >= 6 && tgpa < 7) {
      return "#F59E0B"; // Orange
    } else if (tgpa >= 7 && tgpa < 7.5) {
      return "#3B82F6"; // Blue
    } else if (tgpa >= 7.5) {
      return "#10B981"; // Green
    }
    return "#4299E1"; // Default color
  };

  return (
    <motion.div
      onClick={() => {
        navigate(`/grades/${term}`);
      }}
      className="max-w-xs cursor-pointer hover:shadow-xl transition-all hover:scale-105 bg-white shadow-md rounded-lg overflow-hidden "
    >
      <div className="p-3">
        <motion.span
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-xs font-semibold text-white bg-teal-400 rounded-full py-[1px] px-1 mb-2`}
        >
          Term {term}
        </motion.span>
        <div className="relative w-44 px-7 h-36 mx-auto">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="5"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#4299E1"
              strokeWidth="5"
              strokeDasharray="0 283"
              transform="rotate(-90 50 50)"
              initial={{ strokeDasharray: "0 283" }}
              animate={controls}
              transition={{ delay: 1.5, duration: 3.3 }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span
              className="text-teal-600 font-semibold text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {tgpa}
            </motion.span>
            <span className="text-teal-600 text-sm">TGPA</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CircularProgressCard;

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CircularProgressCard = ({ attendance, term, bunk }) => {
  const navigate = useNavigate();
  const [animateProgress, setAnimateProgress] = useState(false);
  const percentage = (attendance / 100) * 283; // Assuming attendance is on a scale of 0 to 100
  const controls = useAnimation();

  useEffect(() => {
    if (animateProgress) {
      controls.start({
        strokeDasharray: `${percentage} 283`,
        stroke: getColorByAttendance(attendance),
      });
    } else {
      controls.start({ strokeDasharray: `0 283` });
    }
  }, [animateProgress, percentage, attendance, controls]);

  useEffect(() => {
    // Trigger the animation when the component mounts
    setAnimateProgress(true);
  }, []);

  // Define a function to get color based on attendance range
  const getColorByAttendance = (attendance) => {
    if (attendance < 60) {
      return "#EF4444"; // Red
    } else if (attendance >= 60 && attendance < 75) {
      return "#F59E0B"; // Orange
    } else if (attendance >= 75 && attendance < 90) {
      return "#3B82F6"; // Blue
    } else if (attendance >= 90) {
      return "#10B981"; // Green
    }
    return "#4299E1"; // Default color
  };
  const [a, setA] = useState("0.2");
  const [d, setD] = useState("1.3");

  useEffect(() => {
    if (bunk) {
      setA("0.1");
      setD(".5");
    }
  }, [bunk]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-xs mb-4 mx-1 cursor-pointer  transition-all  overflow-hidden"
    >
      <div className="p-3">
        <div className="relative w-36 px-7 h-36 mx-auto">
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
              transition={{ delay: a, duration: d }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span
              className="text-teal-600 font-semibold text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: a }}
            >
              {attendance ? attendance : "0"}%
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CircularProgressCard;

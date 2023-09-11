import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const CircularProgressBar = ({ progress ,number}) => {
  const radius = 18; // Set your desired radius (half of the desired width/height)
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (progress / 100) * circumference;

  const controls = useAnimation();

    useEffect(() => {
    controls.start({ strokeDashoffset: progressOffset });
    }
    , [progressOffset, controls]);
  // Animate the progress bar when the component mounts
//   controls.start({ strokeDashoffset: progressOffset });

  return (
    <div className="relative  w-10 h-10">
      <svg className="absolute" width="100%" height="100%">
        <circle
          className="stroke-current text-gray-300 group-hover:text-purple-300"
          strokeWidth="2"
          fill="transparent"
          r={radius}
          cx="50%"
          cy="50%"
        />
        <motion.circle
          className={`stroke-current text-[#8a70d6] group-hover:text-white/80
          ${number===true ? "text-white" : "text-[#8a70d6]"}
          `}
          fill="transparent"
          strokeWidth="3"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference} // Start with the full circumference
          r={radius}
          cx="50%"
          cy="50%"
          animate={controls}
          initial={{ strokeDashoffset: circumference,
            transition: { duration: 5.5 },
             delay: 0.5,
        }} // Set initial state
        />
      </svg>
      <div className="absolute flex justify-center items-center w-full h-full">
        <span className={`text-[10px] group-hover:text-white text-black/80 ${number===true?
        "text-white" : "text-black/50"}
        
      }`}> {/*text should be white when hovered*/ }
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default CircularProgressBar;

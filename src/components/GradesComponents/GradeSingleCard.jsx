import React, { useEffect, useState } from "react";
import axios from "axios"; // You can use Axios to make API requests
import CircularProgressCard from "./CGPACard";
import { motion } from "framer-motion";
import Termgrade from "./GradeDetterm";
import OverallStats from "./OverAllstats";

const GradeSingleCard = (props) => {
  const [semesterInfo, setSemesterInfo] = useState(props.grades);

  let a = 0.1;

  const [loc, setLoc] = useState(true);
  // check if the path is /grades/:term or /grades

  const path = window.location.pathname;

  useEffect(() => {
    if (path === "/grades") {
      setLoc(true);
    } else {
      setLoc(false);
    }
  }, [path]);

  return (
    <div className=" rounded-lg p-4 ">
      <div>
        <div>
          {loc ? (
            <div className="flex flex-wrap justify-center">
              {semesterInfo.map((semester) => (
                <motion.div
                  initial={{ y: -100, opacity: 0.01 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: (a += 0.1) }}
                  key={semester.term}
                  className="m-4"
                >
                  <CircularProgressCard
                    tgpa={semester.tgpa}
                    term={semester.term}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <Termgrade />
          )}
        </div>
      </div>
      <div>
        {path === "/grades" ? (
          <div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-medium mt-10 mb-4 text-2xl "
        >
          Stats
        </motion.h2>
            <OverallStats studentData={semesterInfo} />
          </div>
        ) : (
          null
        )}
      </div>
    </div>
  );
};

export default GradeSingleCard;

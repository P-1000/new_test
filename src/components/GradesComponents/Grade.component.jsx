import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";

const GradeComp = () => {
  const { term } = useParams();

  const path = window.location.pathname;
  if (path === "/grades") {
    document.title = "Grades | LMS";
  }
  return (
    <div className="">
      <div className="w-full">
        <div className="">
          <motion.div
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className=" "
          >
            <div className="text-2xl pb-3 sm:pb-0 text-black/80 font-semibold  sm:mt-2">
              {path === "/grades" ? (
                "Grades"
              ) : (
                <div className="flex">
                  <div>Grades</div>
                  <MdNavigateNext /> Term ${term}
                </div>
              )}
            </div>
          </motion.div>
        </div>
        <div className="flex"></div>
      </div>
    </div>
  );
};

export default GradeComp;

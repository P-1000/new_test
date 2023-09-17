import React from "react";
import AttenComp from "../components/AttendanceComponents/AttenComp";
import AttenDanceCards from "../components/AttendanceComponents/AttenDanceCards";
import AttendanceDisplayCard from "../components/AttendanceComponents/AttendanceSingleCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Bunk from "./Bunk";
import HomeworkProgressItem from "../components/Utils/HomeworkProgressItem";

// link to redux store ::: 00000

const Attendance = () => {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const path = window.location.pathname;
  const [atn, setAtn] = useState(true);

  useEffect(() => {
    if (path == "/attendance") {
      setAtn(true);
    } else {
      setAtn(false);
    }
  }, [path]);

  useEffect(() => {
    const getAttendance = async () => {
      const at1 = await localStorage.getItem("attendance");
      const at2 = await JSON.parse(at1);
      // if at2 is null then fetch attendance from backend
      if (at2) {
        setAttendance(at2.Attendance_Summary);
        setLoading(false);
      } else {
        navigate("/login");
      }
    };

    getAttendance();
  }, []);

  return (
    <div className="flex flex-col px-4 ">
      <div className="my-5 overflow-x-hidden lg:flex sm:justify-center flex-wrap  ">
        <div className="flex  sm:gap-10 xl:gap-10 md:gap-2 ">
          <AttenComp />
        </div>
      </div>
      <div>
        <div className=" overflow-visible  flex w-11/12 gap-10">
          {atn ? (
            <>
              <div className=" grid-cols-3 gap-10 mx-2 hidden sm:grid">
                {attendance &&
                  attendance.map((item) => (
                    <motion.div
                      className="attendance-item "
                      key={item.courseCode}
                    >
                      <AttendanceDisplayCard
                        courseName={item.courseName}
                        courseCode={item.courseCode}
                        attendancePercentage={item.totalPercentage}
                        attendedClasses={item.totalAttended}
                        totalClasses={item.totalDelivered}
                      />
                    </motion.div>
                  ))}
              </div>

              <div className="flex flex-col items-center justify-center sm:hidden">
                {attendance &&
                  attendance.map((item) => (
                    <motion.div
                      className="attendance-item w-full"
                      key={item.courseCode}
                    >
                      <HomeworkProgressItem
                        progress={item.totalPercentage}
                        title={item.courseName}
                        pages={`${item.totalDelivered}|${item.totalAttended} Attended`}
                      />
                    </motion.div>
                  ))}
              </div>
            </>
          ) : (
            <div>
              <Bunk />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Attendance;

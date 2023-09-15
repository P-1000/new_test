import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CircularProgressCard from "../../Utils/CircularProgress";

const daysToBunk = (present, total, percentage) => {
  const current_attendance = (present / total) * 100;
  if (Math.floor(current_attendance) > percentage) {
    // console.log(Math.floor(((100 * present) - (percentage * total)) / percentage))
    return Math.floor((100 * present - percentage * total) / percentage);
  } else if (Math.floor(current_attendance) < percentage) {
    // console.log((Math.floor((percentage * total - 100 * present) / (100 - percentage))))
    return Math.floor(
      (percentage * total - 100 * present) / (100 - percentage)
    );
  } else {
    return 0;
  }
};

// return Math.floor(((100 * present) - (percentage * total)) / percentage);

function AttendanceCalculator({ attendanceData }) {
  const [gr, setGr] = useState(true);

  const [editedAttendance, setEditedAttendance] = useState(
    attendanceData.map((course) => ({
      ...course,
      TargetAttendance: "",
      BunksLeft: "",
      ResultAttendance: "", // Initialize ResultAttendance
    }))
  );

  const [tarbro, setTarbro] = useState();

  useEffect(() => {
    updateEditedAttendance();
  }, []);

  const updateEditedAttendance = (index, field, newValue) => {
    const updatedAttendance = [...editedAttendance];
    if (updatedAttendance[index]) {
      updatedAttendance[index][field] = newValue;
  
      if (field === "TargetAttendance") {
        recalculateBunks(index);
        calculateResultAttendance(index);
      } else if (field === "BunksLeft") {
        calculateResultAttendance(index);
      }
  
      setEditedAttendance(updatedAttendance);
    }
  };
  

  const recalculateBunks = (index) => {
    const updatedAttendance = [...editedAttendance];
    const course = updatedAttendance[index];
    if (!isNaN(course.TargetAttendance)) {
      const bunksLeft = daysToBunk(
        parseInt(course.totalAttended),
        parseInt(course.totalDelivered),
        course.TargetAttendance
      );
      updatedAttendance[index].BunksLeft = bunksLeft;
      setEditedAttendance(updatedAttendance);
    }
  };

  const calculateResultAttendance = (index) => {
    const updatedAttendance = [...editedAttendance];
    const course = updatedAttendance[index];

    const attended = parseInt(course.totalAttended);
    const delivered = parseInt(course.totalDelivered);
    const bunks = parseInt(course.BunksLeft);
    const dls = parseInt(course.dutyLeave);
    const tar = parseInt(course.TargetAttendance);

    if (!isNaN(attended) && !isNaN(delivered) && !isNaN(bunks)) {
      const resultAttendance = (
        ((attended + dls) / (delivered + bunks)) *
        100
      ).toFixed(2);
      const resultAttendance_toatt = (
        ((attended + dls + bunks) / (delivered + bunks)) *
        100
      ).toFixed(2);
      const ca1 = ((attended + dls) / delivered) * 100;
      const ca = ca1.toFixed(2);
      if (ca > tar) {
        updatedAttendance[index].ResultAttendance = Math.ceil(resultAttendance);
        setEditedAttendance(updatedAttendance);
        console.log(Math.ceil(resultAttendance));
        setGr(true);
      } else if (ca < tar) {
        updatedAttendance[index].ResultAttendance = Math.ceil(
          resultAttendance_toatt
        );
        setEditedAttendance(updatedAttendance);
        setGr(false);
        console.log(Math.ceil(resultAttendance_toatt));
      } else {
        updatedAttendance[index].ResultAttendance = ca;
        setEditedAttendance(updatedAttendance);
      }
    }
  };

  return (
    <div>
      {/* <h1 className="text-2xl font-semibold mb-4">Attendance Calculator</h1> */}
      <div className="flex flex-wrap sm:-mx-4 text-xs sm:text-base">
        {editedAttendance.map((course, index) => (
          <motion.div
            key={index}
            className="w-full sm:px-4 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center sm:items-start flex-col sm:flex-row sm:w-10/12 bg-white rounded-lg shadow p-4">
              <div className="  sm:w-5/12 sm:ml-3">
                <h2 className="sm:text-lg text-sm font-semibold bg-[#579be3] px-2 rounded-lg text-white max-w-fit  mb-6 sm:mb-2">
                  {course.courseCode.split(" ")[0]}
                </h2>
                <div className="mb-2">
                  <span className="font-bold">
                    {" "}
                    <span className="sm:inline hidden"> Total </span>Attended:
                  </span>{" "}
                  {course.totalAttended}
                </div>
                <div className="mb-2">
                  <span className="font-bold">
                    <span className="sm:inline hidden">Total </span> Delivered:
                  </span>{" "}
                  {course.totalDelivered}
                </div>
                <div className="mb-2">
                  <span className="font-bold">
                    Current <span className="sm:inline hidden">Percentage</span>{" "}
                    :
                  </span>{" "}
                  {course.totalPercentage}%
                </div>
                <div className="mb-2">
                  <span className="font-bold">
                    Target <span className="sm:inline hidden"> Attendance</span>{" "}
                    (%):
                  </span>
                  <input
                    type="text"
                    placeholder="Enter %"
                    value={course.TargetAttendance}
                    onChange={(e) =>
                      updateEditedAttendance(
                        index,
                        "TargetAttendance",
                        e.target.value
                      )
                    }
                    maxLength="3"
                    className="w-32    p-1 focus:outline-none border-b text-center rounded placeholder:text-xs"
                  />
                </div>
             {gr ? 
              <div className="mb-2">
                  <span className="font-bold">
                    Bunks Left:
                  </span>
                  <input
                    type="text"
                    placeholder="Enter %"
                    value={isFinite(course.BunksLeft) ? course.BunksLeft : 0}
                    onChange={(e) =>
                      updateEditedAttendance(index, "BunksLeft", e.target.value)
                    }
                    maxLength="3"
                    className="w-32 p-1 focus:outline-none border-b text-center rounded placeholder:text-xs"
                  />
                </div> : 
                <div className="mb-2">
                  <span className="font-bold">
                   Classes to attend:
                  </span>
                  <input
                    type="text"
                    placeholder="Enter %"
                    value={isFinite(course.BunksLeft) ? course.BunksLeft : 0}
                    onChange={(e) =>
                      updateEditedAttendance(index, "BunksLeft", e.target.value)
                    }
                    maxLength="3"
                    className="w-32 p-1 focus:outline-none border-b text-center rounded placeholder:text-xs"
                  />
                </div> 
                
             }
                <div>
                  <span className="font-bold">Result Attendance:</span>{" "}
                  {course.ResultAttendance || ""}
                </div>
              </div>

              <div className=" flex flex-row   sm:w-2/12 sm:p-4 mx-auto sm:mx-1">
                <div className="hidden sm:block">
                  <span className="font-bold">Current Attendance:</span>
                  <CircularProgressCard
                    attendance={parseFloat(course.totalPercentage)}
                  />
                </div>

                <div>
                  <span className="font-bold sm:inline hidden">
                    Result Attendance:
                  </span>
                  <CircularProgressCard
                    bunk={true}
                    attendance={parseFloat(course.ResultAttendance)}
                  />
                </div>
              </div>
            </div>{" "}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AttendanceCalculator;

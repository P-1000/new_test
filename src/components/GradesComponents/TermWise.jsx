import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTransition, config } from "react-spring";

const customGradeOrder = {
  O: 0,
  "A+": 1,
  A: 2,
  "B+": 3,
  B: 4,
  "C+": 5,
  C: 6,
  "D+": 7,
  D: 8,
  E: 9,
  F: 10,
};

const GradesForTerm = ({ studentData, selectedTerm }) => {
  const [sortedData, setSortedData] = useState([]);
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    if (!studentData || !studentData.length) {
      setSortedData([]);
      return;
    }

    // Filter the data based on the selected term
    const filteredData = studentData.filter(
      (student) => student.term === selectedTerm
    );

    if (!filteredData.length) {
      setSortedData([]);
      return;
    }

    // Create a flat array of grades for sorting
    const flatGrades = filteredData.reduce((acc, student) => {
      acc.push(
        ...student.grades.map((grade) => ({ ...grade, term: student.term }))
      );
      return acc;
    }, []);

    let sorted = [...flatGrades];

    if (sortBy === "asc") {
      sorted = sorted.sort(
        (a, b) => customGradeOrder[a.grade] - customGradeOrder[b.grade]
      );
    } else if (sortBy === "desc") {
      sorted = sorted.sort(
        (a, b) => customGradeOrder[b.grade] - customGradeOrder[a.grade]
      );
    }

    setSortedData(sorted);
  }, [studentData, selectedTerm, sortBy]);

  // Use React Spring transitions for smooth sorting animations
  const transitions = useTransition(sortedData, {
    key: (item) => item.course,
    config: config.stiff,
    from: { opacity: 0, transform: "translateY(-20px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(-20px)" },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full "
    >
      {/* <h2 className="text-2xl font-semibold mb-4">Grades for Term {selectedTerm}</h2> */}
      <div className="mb-2 flex items-center">
        <label className="mr-2 mt-5 text-xs sm:text-base">Sort by Grade:</label>
        <div className="flex mt-5 text-xs sm:text-base ">
          <button
            onClick={() => setSortBy("asc")}
            className={`${
              sortBy === "asc"
                ? "bg-sky-700 text-white"
                : "bg-gray-200 text-gray-700"
            } rounded-md py-1 px-2 mr-2`}
          >
            Ascending
          </button>
          <button
            onClick={() => setSortBy("desc")}
            className={`${
              sortBy === "desc"
                ? "bg-sky-700 text-white"
                : "bg-gray-200 text-gray-700"
            } rounded-md py-1 px-2`}
          >
            Descending
          </button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center flex-col my-6 border p-4 rounded-xl shadow-md">
        <AnimatePresence>
          {transitions((style, item) => (
            <motion.div
              key={item.course}
              style={style}
              className="flex border-b w-11/12 hover:scale-105 border-gray-300 py-4 hover:bg-gray-200 cursor-pointer transition ease-in rounded-md"
            >
              <div className="w-10/12 px-4 text-xs sm:text-lg">
                {item.course.split(" : ")[0]} : : {item.course.split(" : ")[1]}
              </div>
              <div className="w-2/12 px-4 font-bold text-xs sm:text-lg">
                {item.grade}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default GradesForTerm;

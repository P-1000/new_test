import React from "react";
import GradeComp from "../components/GradesComponents/Grade.component";
import GradeSingleCard from "../components/GradesComponents/GradeSingleCard";
import { useSelector } from "react-redux";

const Grades = () => {
  const { grades } = useSelector((state) => state.grades);
  console.log(grades.data);
  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <div className="overflow-x-hidden lg:flex sm:justify-normal justify-center flex-wrap">
        <div className="flex sm:gap-10 xl:gap-10 md:gap-2">
          <GradeComp />
        </div>
        <div></div>
      </div>
      <div className="px-4 w-full">
        <div>
          <GradeSingleCard grades={grades.data} />
        </div>
      </div>
    </div>
  );
};

export default Grades;

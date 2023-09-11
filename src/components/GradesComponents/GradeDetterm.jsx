import React from "react";
import GradesForTerm from "./TermWise"; // Import the component
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Termgrade() {
  const { term } = useParams();
  const t7 = parseInt(term);
  const { grades } = useSelector((state) => state.grades);
  const studentData = grades.data;
  console.log(studentData);
  return (
    <div className="container mx-auto p-4">
      <GradesForTerm studentData={studentData} selectedTerm={t7} />{" "}
      {/* Pass the student data as a prop */}
    </div>
  );
}

export default Termgrade;

import React, { useState } from "react";
import CourseList from "./CourseList";
import UnitList from "./UnitList";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FiArrowRightCircle } from "react-icons/fi";
import RenderPdf from "./RenderPdf";

const CourseDetailComp = () => {
  const { course_code } = useParams();
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="bg-primary text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold tracking-wide">
          AKADEMY LOGO
        </h1>
        <div className="flex gap-4">
          <button onClick={() => navigate(-1)} className="px-4 py-2 border rounded">
            Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 border rounded"
          >
            Home
          </button>
        </div>
      </div>
      <div className="container ml-5 mr-0 ">
        <div className="flex gap-5">
          {showSidebar && (
            <div  className="w-[20%] border-r ">
              <UnitList />
            </div>
          )}
          <div className="flex-grow">
            <div className="flex justify-end">
              <button
                onClick={toggleSidebar}
                className="  border rounded"
              >
                <FiArrowRightCircle className="text-2xl " />
              </button>
            </div> 
            <div className="sticky w-full">
              <RenderPdf  url={"none"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailComp;

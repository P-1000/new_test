import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronRight, FiFileText } from "react-icons/fi";
import cd from "./data";
import { useDispatch } from "react-redux"; // Import useDispatch
import { setSomeData } from "../../Redux/Cache"; // Import the action creator

const UnitList = () => {
  const { course_code } = useParams();
  const courseData = cd;
  const dispatch = useDispatch(); // Get the dispatch function

  const course = courseData
    .flat()
    .find((course) => course.course_code === course_code);

  if (!course) {
    return <div>Course not found</div>;
  }

  const [expandedUnits, setExpandedUnits] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);

  const toggleSectionExpansion = (unitTitle, section) => {
    setExpandedUnits((prevExpandedUnits) => ({
      ...prevExpandedUnits,
      [unitTitle]: {
        ...prevExpandedUnits[unitTitle],
        [section]: !prevExpandedUnits[unitTitle]?.[section],
      },
    }));
  };

  const handleFileSelection = (file) => {
    setSelectedFile(file);
  };

  const handleMaterialItemClick = (materialItem) => {
    // Include the URL in the materialData object
    const materialData = {
      materialName: materialItem.name,
      sectionName: materialItem.section,
      unitTitle: materialItem.unitTitle,
      courseCode: course.course_code,
      url: materialItem.url, // Include the URL
    };


    // Dispatch the material data to the utils slice's setSomeData action
    dispatch(setSomeData(materialData));

  };

  return (
    <div className="h-screen px-10 py-7">
      <h2 className="text-2xl w-full mx-0 px-0 font-semibold mb-4">
        {course.course_code}
      </h2>
      <ul className="cursor-pointer">
        {courseData.map((unitList) =>
          unitList.map((unit) => (
            <motion.li
              key={unit._id}
              className="mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="flex items-center hover:bg-gray-100 cursor-pointer"
                onClick={() => toggleSectionExpansion(unit.unit_title, "main")}
              >
                {expandedUnits[unit.unit_title]?.main ? (
                  <FiChevronDown className="mr-2" />
                ) : (
                  <FiChevronRight className="mr-2" />
                )}
                <div className="font-semibold">{unit.unit_title}</div>
              </div>
              {expandedUnits[unit.unit_title]?.main && (
                <ul className="pl-4">
                  {[
                    "lecture_notes",
                    "study_materials",
                    "mcq_papers",
                    "other_materials",
                  ].map((section) => {
                    if (
                      Array.isArray(unit[section]) &&
                      unit[section].length > 0
                    ) {
                      return (
                        <motion.li
                          key={section}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div
                            className="flex items-center hover:bg-gray-100 cursor-pointer"
                            onClick={() =>
                              toggleSectionExpansion(unit.unit_title, section)
                            }
                          >
                            {expandedUnits[unit.unit_title]?.[section] ? (
                              <FiChevronDown className="mr-2" />
                            ) : (
                              <FiChevronRight className="mr-2" />
                            )}
                            <div className="font-semibold">{section}</div>
                          </div>
                          {expandedUnits[unit.unit_title]?.[section] && (
                            <ul className="pl-4">
                              {unit[section].map((materialItem) => (
                                <motion.li
                                  key={materialItem._id}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <div
                                    // to={`./${unit.unit_title}/${section}/${materialItem.name}`}
                                    className={`${
                                      selectedFile === materialItem.name
                                        ? "text-blue-600 font-semibold"
                                        : "text-blue-600 hover:underline"
                                    }`}
                                    onClick={() =>
                                      handleMaterialItemClick({
                                        name: materialItem.name,
                                        section: section,
                                        unitTitle: unit.unit_title,
                                        url: materialItem.url, // Include the URL
                                      })
                                    }
                                  >
                                    <div className="flex p-1">
                                      <FiFileText className="mt-1" />
                                      <div className="font-semibold text-[14px]">
                                        {materialItem?.name.length > 11
                                          ? materialItem?.name.slice(0, 11) +
                                            "..."
                                          : materialItem?.name}
                                      </div>
                                    </div>
                                  </div>
                                </motion.li>
                              ))}
                            </ul>
                          )}
                        </motion.li>
                      );
                    } else {
                      return null;
                    }
                  })}
                </ul>
              )}
            </motion.li>
          ))
        )}
      </ul>
    </div>
  );
};

export default UnitList;

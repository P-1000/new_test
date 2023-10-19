import React, { useEffect, useState } from "react";
import PdfViewer from "../PDF/Test";
import { motion } from "framer-motion";

const FolderStructure = ({ shit, course_code }) => {
  const [openFolder, setOpenFolder] = useState(null);
  const [dupOpenFolder, setDupOpenFolder] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const toggleFolder = (folderName) => {
    setOpenFolder(openFolder === folderName ? null : folderName);
  };

  const selectFile = (fileName, newPath) => {
    if (fileName !== null) {
      const pathEle = newPath.split("/");
      setSelectedFile(fileName);
      setDupOpenFolder(pathEle[0]);
    }
  };

  useEffect(() => {
    console.log(shit, "list");
  }, [shit]);

  useEffect(() => {
    console.log(`${course_code}/${dupOpenFolder}/${selectedFile}`);
  }, [course_code, dupOpenFolder, selectedFile]);

  if (!shit) {
    return null;
  }

  const renderList = (list, path = "") => {
    return (
      <ul className="list-none  transition-all py-2">
        {Object.keys(list).map((key) => {
          const value = list[key];
          const newPath = path ? `${path}/${key}` : key;
          if (typeof value === "object") {
            const isOpen = openFolder === newPath;
            return (
              <li key={newPath} className="mx-3 my-1 py-1">
                <button
                  className="flex bg-slate-200 py-1 w-36 rounded-lg 
                  first-letter:font-bold px-4 mx-2
                   items-center text-sm font-medium text-gray-900 hover:text-sky-900 focus:outline-none"
                  onClick={() => toggleFolder(newPath)}
                >
                  <svg
                    className={`mr-1 h-4 w-4 transition-all rotate-90 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 6.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 1 1-1.414 1.414L11 4.414V16a1 1 0 1 1-2 0V4.414L6.707 6.707a1 1 0 0 1-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="flex gap-10">{key}</div>
                </button>
                {isOpen && renderList(value, newPath)}
              </li>
            );
          } else {
            return (
              <li key={newPath} className="text-sm text-sky-900">
                <button
                  className="hover:text-gray-200 mb-2 border-b w-[90%] float-right flex items-start ml-2 border-sky-800/20 focus:outline-none"
                  onClick={() => selectFile(key, newPath)}
                >
                  <motion.h1
                    whileTap={{ scale: 0.9 }}
                    className="text-clip 
                 text-sm font-medium
                 mx-6 align-left transition-all text-sky-900 mt-[.4rem]"
                  >
                    {key.length > 23
                      ? key.slice(0, 20) + "..."
                      : key.slice(0, key.length - 4)}
                  </motion.h1>
                </button>
                {/* {selectedFile === key && (
                  <div className="ml-4 text-gray-400">{newPath}</div>
                )} */}
              </li>
            );
          }
        })}
      </ul>
    );
  };

  return (
    <div className="flex h-screen w-[100vw]">
      <div className="bg-slate-10 w-72 text-gray-400 rounded-md p-2">
        {renderList(shit)}
      </div>
      <div className="flex-1 bg-slate-100 ">
        <div className="text-gray-400">
          {selectedFile && selectedFile.includes(".pdf") && (
            <div>
              <div>
                <PdfViewer
                  url={`${course_code}/${dupOpenFolder}/${selectedFile}`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FolderStructure;

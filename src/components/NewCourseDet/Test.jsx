import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import FolderStructure from "./B";
import axios from "axios";
// import "./FolderUploader.css"; // Import your custom CSS for styling

function FolderUploader(props) {
  const [folderStructure, setFolderStructure] = React.useState({
    unit1: {
      name: "name.pdf",
    },
  });
  const [error, setError] = React.useState(null);

  const {nfolder , course_code} =props

  useEffect(() => {
    if (nfolder) {
        setFolderStructure(JSON.parse(nfolder));
    }
    }, [nfolder]);

  const parseFolderStructure = (files) => {
    const folderInfo = {};
    for (const file of files) {
      const pathSegments = file.path.split("/");
      let currentDir = folderInfo;

      for (let i = 0; i < pathSegments.length - 1; i++) {
        const dirName = pathSegments[i];
        if (!currentDir[dirName]) {
          currentDir[dirName] = {};
        }
        currentDir = currentDir[dirName];
      }

      const fileName = pathSegments[pathSegments.length - 1];
      currentDir[fileName] = fileName;
    }
    return folderInfo;
  };


  const [shit, setShit] = useState({
    unit1: {
      name: "name.pdf",
    },
  });
  
  //course name state
  const [cname , setCname] = useState("course Name")

  useEffect(() => {
    let fuck = folderStructure[Object.keys(folderStructure)[0]];
    let coursename = Object.keys(fuck)[0];
    //console.log(fuck[coursename])
    setShit(fuck[coursename]);
    setCname(Object.keys(fuck)[0])
  }, [folderStructure]);

  useEffect(() => {}, [shit]);




  return (
    <div className="w-full">
      <FolderStructure shit={shit} course_code={course_code} />
      
    </div>
  );
}

export default FolderUploader;

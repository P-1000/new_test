// import React from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import PdfViewer from '../components/PDF/Test.jsx';

// const CourseDetail = () => {
//   const navigate = useNavigate();
//   const { course_code } = useParams();

//   const [pdfFile, setPdfFile] = useState(null);

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     if (selectedFile) {
//       setPdfFile(selectedFile);
//     }
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col">
//       {/* Header */}
//       <div className="bg-primary p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <Link to="/" className="text-white">
//             {/* <img src={Logo} alt="Logo" className="h-8" /> */}
//             <h1>LMSEDU</h1>
//           </Link>
//           <h2>{course_code}</h2>
//           <button
//             className="text-white font-semibold hover:underline"
//             onClick={() => {
//               navigate('/');
//             }}
//           >
//             Back
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto flex-grow flex">
//         {/* Table of Contents */}
//         <div className="w-1/4 p-4 border-r border-gray-300">
//           <h2 className="text-lg font-semibold mb-2">Table of Contents</h2>
//           <ul>
//             <li>
//               <a href="#section1">Section 1</a>
//             </li>
//             <li>
//               <a href="#section2">Section 2</a>
//             </li>
//             {/* Add more sections */}
//           </ul>
//         </div>

//         {/* Course Content */}
//         <div className="w-3/4 p-4">
//           <h1 className="text-2xl font-semibold mb-4" id="section1">
//             Section 1
//           </h1>
//           <p className="text-gray-700">
//           <PdfViewer pdfFile="https://d14uxtu9d0y7lp.cloudfront.net/650c960ec0sbivid.pdf" />
//           </p>
//           {/* Add more content sections */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetail;


import React, { useEffect , useState } from 'react'
import CourseDetailComp from '../components/CourseDetail/CourseDetailComp'
import NcourseD from '../components/NewCourseDet/NcourseD'
import Header1 from '../components/NewCourseDet/Nav'
import axios from 'axios'
import FolderUploader from '../components/NewCourseDet/Test'

const CourseDetail = () => {
  const [course , setCourse] = useState("")
  const { course_code } = useParams();

  useEffect(() => {

    const fetchCourse = async () => {
      const res = await  axios.get(`https://clientback-xa21.onrender.com/api/course/courses/getCourseByCode/${course_code}`)
      setCourse(res.data)
    }
    fetchCourse()

  }, [])
  return (
   <>
   {/* <div className='bg-white'>
   <CourseDetailComp />
   </div> */}
   <Header1 />
   <div>
      <NcourseD  />
      <FolderUploader nfolder={course[0]?.Folder} course_code={course[0]?.course_code} />
   </div>
   </>
  )
}

export default CourseDetail
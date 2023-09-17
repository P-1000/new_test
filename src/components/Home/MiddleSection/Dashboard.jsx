import React, { useState } from "react";
import Search from "../../../assets/home/search.png";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineNotificationAdd } from "react-icons/md";
import NewCourse from "./NewCourse";
import MyCourse from "./MyCourse";
import { motion } from "framer-motion";
import SliderCarousel from "./Carousel";



const Dashboard = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const dummyData = [
    {
      id: 1,
      courseCode: "CSE 101",
      courseName: "Introduction to Computer Science",
    },
    {
      id: 2,
      courseCode: "CSE 102",
      courseName: "Introduction to Programming",
    },
    {
      id: 3,
      courseCode: "CSE 201",
      courseName: "Data Structures and Algorithms",
    },
    {
      id: 4,
      courseCode: "CSE 202",
      courseName: "Object Oriented Programming",
    },
    {
      id: 5,
      courseCode: "CSE 301",
      courseName: "Database Systems",
    },
    {
      id: 6,
      courseCode: "CSE 302",
      courseName: "Operating Systems",
    },
    {
      id: 7,
      courseCode: "CSE 401",
      courseName: "Software Engineering",
    },
    {
      id: 8,
      courseCode: "CSE 402",
      courseName: "Computer Networks",
    },
    {
      id: 9,
      courseCode: "CSE 501",
      courseName: "Artificial Intelligence",
    },
    {
      id: 10,
      courseCode: "CSE 502",
      courseName: "Machine Learning",
    },
    {
      id: 11,
      courseCode: "CSE 601",
      courseName: "Computer Vision",
    },
    {
      id: 12,
      courseCode: "CSE 602",
      courseName: "Natural Language Processing",
    },
  ];

  const handleInputChange = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    const filteredResults = dummyData.filter(
      (item) =>
        item.courseCode.toLowerCase().includes(inputValue.toLowerCase()) ||
        item.courseName.toLowerCase().includes(inputValue.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (



    <div className="sm:px-10 flex flex-col p-4 sm:-mt-3 w-full sm:items-start   md:w-[32rem] lg:w-[46rem]  xl:w-[50rem]    ">
      <div className=" sm:flex sm:w-[100%] justify-between border-b-2 pb-3">
        <div className="flex flex-col items-center  ">
          <h2
            className="text-2xl pb-3 sm:pb-0 text-black/80 font-semibold z-10 sm:mt-2">

            Welcome Back!
          </h2>
          {/* <p className="">Hi kaurfb</p> */}
        </div>
        <div className="gap-4 flex items-center">
          <div className="flex flex-col">
            <div className="flex shadow-md rounded-2xl p-2 border-none bg-white focus:ring ring-sky-800/50">
              <AiOutlineSearch className=" ml-2 w-6 h-6  text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                value={searchInput}
                onChange={handleInputChange}
                className="rounded-2xl w-[15rem] pl-10 focus:outline-none"
              />
            </div>
            <div className="absolute z-50 mt-10">
              {searchInput && (
                <div className="mt-4  bg-white border  py-2 px-3 rounded-lg shadow-md">
                  {searchResults.map((result) => (
                    <div key={result.id} className="z-50">
                      <div className="flex gap-2 p-2 hover:bg-slate-100 rounded-lg cursor-pointer items-center justify-between">
                        <p className="text-sm ">{result.courseCode}</p>
                        <p className="text-sm">{result.courseName}</p>
                      </div>
                      <hr className="my-2" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <button className="flex shadow-lg items-center justify-center rounded-2xl hover:scale-105 transition ease-in bg-sky-800 p-2">
            <MdOutlineNotificationAdd className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
      {/* <NewCourse /> */}
      <SliderCarousel />
      <MyCourse />

    </div>
  );
};

export default Dashboard;
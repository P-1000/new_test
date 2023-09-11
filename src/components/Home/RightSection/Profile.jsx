import React, { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import Man from "../../../assets/home/man.png";
import CircularProgressBar from "./ProgressBar";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import DropdownButton from "./DropDown";
import HomeworkProgressItem from "../../Utils/HomeworkProgressItem";

import { useNavigate } from "react-router-dom";


const Profile = () => {
  const navigate = useNavigate()
  const userProf = useSelector((state) => state.profile.userProfile);
  const userProfile = userProf?.data;
  const [userName, setUserName] = useState("");
  const [section, setSection] = useState("");

  useEffect(() => {
    if (userProfile) {
      const username = `${userProfile?.Name["First Name"]} ${userProfile?.Name["Last Name"]}`;
      setUserName(username);
      setSection(userProfile?.Section);
    }
  }, [userProfile]);

  console.log(userProfile);

  return (
    <div className="w-[16rem]  hidden md:block lg:max-[xl]:w-[14rem]  ">
      <div className="gap-20 text-lg font-medium text-black/80 flex items-center justify-between">
        {userProfile ? (
          <h1 className="mt-2">Profile</h1>
        ) : (
          <h1 className="mt-2">Login</h1>
        )}
        {/* <button className="hover:bg-[#e9e3ff] shadow-lg rounded-md p-2"> */}
        {/* <BiEditAlt className="w-6 h-6 text-gray-500" /> */}
        <DropdownButton login={userProfile ? true : false} />
        {/* </button> */}
      </div>
      <div className="flex items-center justify-center mt-10 flex-col">
        <div className="bg-purple-200 w-24 h-24 relative overflow-hidden rounded-full">
          <img
            className="w-24 h-24 mx-auto absolute top-2 rounded-full"
            src={Man}
            alt=""
          />
        </div>
        <div className="mt-2 flex items-center justify-center flex-col">
          <h2>{userName ? userName : "login"}</h2>
          <h5 className="text-sm mt-1 text-gray-400">
            {section ? section : "login with you ums id"}
          </h5>
        </div>
      </div>
      {/* <div className=" sticky top-1 h-[100vh] "> */}

      <div className="mt-10 z-[10] sticky top-0  h-[100vh]     ">
        <h1 className="text-xl ">Important Links</h1>
        <div className=" ">
       <div onClick={() => navigate('/quizz')}>
       <HomeworkProgressItem progress={50} number={true}  title="TAKE A QUIZZ" pages={12}
        
        />
       </div>
          <HomeworkProgressItem progress={60} title="JAVASCRIPT" pages={10} />
          <HomeworkProgressItem progress={90} title="DSA SHEETS" pages={15} />
          <HomeworkProgressItem progress={100} title="TOP QUESTIONS QUIZZ" pages={20} />
          <HomeworkProgressItem progress={50} title="REACT MATERIALS" pages={10} />
          <HomeworkProgressItem progress={80} title="C++" pages={15} />
          <HomeworkProgressItem progress={100} title="JAVA" pages={10} /> 

            

      </div>

      </div>
    </div>
  );
};

export default Profile;

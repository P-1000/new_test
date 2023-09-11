import React from "react";
import SideBar from "../components/Home/LeftSection/SideNav";
import DashBoard from "../components/Home/MiddleSection/Dashboard";
import Profile from "../components/Home/RightSection/Profile";

const Home = () => {
  return (
    <div className="mx-2 overflow-hidden  my-5 lg:flex justify-center flex-wrap ">
      {/* <div className="grid  grid-cols-3  gap-[30rem]"> */}
      <div className="flex   gap-10 sm:gap-10 xl:gap-10 lg:gap-10 md:gap-2 ">
        {/* <div className="pt-5"> */}
        {/* <SideBar /> */}
        {/* </div> */}
        <DashBoard />
        <Profile />
      </div>
    </div>
  );
};

export default Home;

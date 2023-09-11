import React from "react";
import map from "../../../assets/home/map.png";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const NewCourse = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="w-[100%]">
      <h2 className="text-lg  font-semibold text-black/80 mt-10 mb-5">
        New Course
      </h2>
      <div className="overflow-hidden">
        <div className="flex gap-2  justify-between ">
          <div className="bg-[#fff0e1] cursor-pointer hover:scale-95 transition-all shadow-md rounded-lg p-2.5 h-[13rem] md:h-[14rem] sm:h-[16rem] lg:h-[16rem]">
            <div className="bg-[#fbab5d] rounded-lg shadow-md flex items-center justify-center h-[4rem] sm:h-[6rem] md:h-[5.5rem] md:w-[9rem] lg:h-[6rem] w-[8rem] sm:w-[10rem] lg:w-[10rem]">
              <img
                src={map}
                alt=""
                className="sm:h-[7rem] lg:h-[7rem] lg:w-[7rem] md:h-[5rem] md:w-[5rem] h-[4rem] flex items-center  justify-center sm:w-[7rem]"
              />
            </div>
            <div className="sm:pt-3 pt-3">
              <p>Geography</p>
              <p className=" text-xs">6 Chapters</p>
            </div>
            <div className="flex sm:pt-14 lg:pt-14 md:pt-8 pt-10  items-center justify-between overflow-scroll overflow-x-scroll">
              <div class="flex -space-x-1  ">
                <img
                  class="inline-block sm:h-6 sm:w-6 h-5  rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  class="inline-block sm:h-6 sm:w-6 h-5 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  class="inline-block sm:h-6 sm:w-6 h-5 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <button className="bg-[#fbab5d] text-white shadow-md rounded-md w-7 h-7 flex justify-center  items-center">
                <IoIosArrowForward className="sm:h-6 sm:w-6 h-5" />
              </button>
            </div>
          </div>

          <div className="bg-[#e9e3ff] mx-4 lg:mx-1 cursor-pointer hover:scale-95 transition-all shadow-md rounded-lg p-2.5 h-[13rem] md:h-[14rem] sm:h-[16rem] lg:h-[16rem]">
            <div className="bg-[#8a70d6] rounded-lg shadow-md flex items-center justify-center h-[4rem] sm:h-[6rem] md:h-[5.5rem] md:w-[9rem] lg:h-[6rem] w-[8rem] sm:w-[10rem] lg:w-[10rem]">
              <img
                src={map}
                alt=""
                className="sm:h-[7rem] lg:h-[7rem] md:h-[5rem] lg:w-[7rem] md:w-[5rem] h-[4rem] flex items-center  justify-center sm:w-[7rem]"
              />
            </div>
            <div className="sm:pt-3 pt-3">
              <p>Geography</p>
              <p className=" text-xs">6 Chapters</p>
            </div>
            <div className="flex sm:pt-14 lg:pt-14 md:pt-8 pt-10  items-center justify-between">
              <div class="flex -space-x-1 overflow-hidden  ">
                <img
                  class="inline-block sm:h-6 sm:w-6 h-5 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  class="inline-block sm:h-6 sm:w-6 h-5 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  class="inline-block sm:h-6 sm:w-6 h-5 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <button className="bg-[#8a70d6] text-white shadow-md rounded-md w-7 h-7 flex justify-center  items-center">
                <IoIosArrowForward className="sm:h-6 sm:w-6 h-5" />
              </button>
            </div>
          </div>

          <div className="bg-[#e5f3ff] hidden md:hidden lg:hidden xl:block sm:block hover:scale-95 transition-all rounded-lg p-2.5 h-[13rem] md:h-[14rem] sm:h-[16rem] lg:h-[16rem]">
            <div className="bg-[#579be3] rounded-lg flex items-center shadow-md justify-center h-[4rem] sm:h-[6rem] md:h-[5.5rem] md:w-[9rem] lg:h-[6rem] w-[8rem] sm:w-[10rem] lg:w-[10rem]">
              <img
                src={map}
                alt=""
                className="sm:h-[7rem] lg:h-[7rem] md:h-[5rem] md:w-[5rem] h-[4rem] flex items-center lg:w-[7rem]  justify-center sm:w-[7rem]"
              />
            </div>
            <div className="pt-3">
              <p className="  ">Photography Course</p>
              <p className="text-xs">6 Chapters</p>
            </div>
            <div className="flex sm:pt-14 lg:pt-14 md:pt-8 pt-10   items-center justify-between">
              <div class="flex -space-x-1 overflow-hidden  ">
                <img
                  class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <button className="bg-[#579be3] text-white rounded-md w-7 h-7 shadow-md flex justify-center  items-center">
                <IoIosArrowForward className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="bg-[#e9e3ff] mx-4 lg:mx-1 cursor-pointer hover:scale-95 transition-all shadow-md rounded-lg p-2.5 h-[13rem] md:h-[14rem] sm:h-[16rem] lg:h-[16rem]">
            <div className="bg-[#8a70d6] rounded-lg shadow-md flex items-center justify-center h-[4rem] sm:h-[6rem] md:h-[5.5rem] md:w-[9rem] lg:h-[6rem] w-[8rem] sm:w-[10rem] lg:w-[10rem]">
              <img
                src={map}
                alt=""
                className="sm:h-[7rem] lg:h-[7rem] md:h-[5rem] lg:w-[7rem] md:w-[5rem] h-[4rem] flex items-center  justify-center sm:w-[7rem]"
              />
            </div>
            <div className="sm:pt-3 pt-3">
              <p>Geography</p>
              <p className=" text-xs">6 Chapters</p>
            </div>
            <div className="flex sm:pt-14 lg:pt-14 md:pt-8 pt-10  items-center justify-between">
              <div class="flex -space-x-1 overflow-hidden  ">
                <img
                  class="inline-block sm:h-6 sm:w-6 h-5 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  class="inline-block sm:h-6 sm:w-6 h-5 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  class="inline-block sm:h-6 sm:w-6 h-5 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <button className="bg-[#8a70d6] text-white shadow-md rounded-md w-7 h-7 flex justify-center  items-center">
                <IoIosArrowForward className="sm:h-6 sm:w-6 h-5" />
              </button>
            </div>
          </div>

          {/*for only lg screen and more*/}
          <div className="bg-[#fff0e1]  hover:scale-95 hidden lg:block transition-all shadow-md rounded-lg p-2.5 h-[16rem]">
            <div className="bg-[#fbab5d] shadow-md rounded-lg flex items-center justify-center h-[6rem] w-[10rem]">
              <img
                src={map}
                alt=""
                className="h-[7rem] flex items-center justify-center w-[7rem]"
              />
            </div>
            <div className="pt-3">
              <p>Geography</p>
              <p className="text-xs">6 Chapters</p>
            </div>
            <div className="flex pt-14  items-center justify-between">
              <div class="flex -space-x-1 overflow-hidden  ">
                <img
                  class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <button className="bg-[#fbab5d] shadow-md text-white rounded-md w-7 h-7 flex justify-center  items-center">
                <IoIosArrowForward className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCourse;

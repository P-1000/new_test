import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import pam from "../../../assets/home/map.png";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CustomSlider = () => {
    const slides = [
        {
            bgColor: "#fff0e1",
            title: "Geography",
            chapters: "6 Chapters",
            imageSrc: pam, // Use the "pam" image
            avatarImages: [
                "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=...",
                // Add more avatar image URLs if needed
            ],
        },
        {
            bgColor: "#e9e3ff",
            title: "Geography",
            chapters: "6 Chapters",
            imageSrc: pam, // Use the "pam" image
            avatarImages: [
                "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=...",
                // Add more avatar image URLs if needed
            ],
        },
        {
            bgColor: "#e5f3ff",
            title: "Photography Course",
            chapters: "6 Chapters",
            imageSrc: pam, // Use the "pam" image
            avatarImages: [
                "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=...",
                // Add more avatar image URLs if needed
            ],
        },
        {
            bgColor: "#fff0e1",
            title: "Geography",
            chapters: "6 Chapters",
            imageSrc: pam, // Use the "pam" image
            avatarImages: [
                "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=...",
                // Add more avatar image URLs if needed
            ],
        },
    ];

    return (
        <Carousel
            className="w-full"
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
            showIndicators={false}
            showArrows={true}
            swipeable={true}
            axis="horizontal"
            emulateTouch={true}
            stopOnHover={true}
            interval={3000}
            centerMode={false} // Disable centerMode
            centerSlidePercentage={100} // Adjust centerSlidePercentage
            dynamicHeight={true}
            slidesToShow={4} // Show 4 slides at once
        >
            {slides?.map((slide, index) => (
                <div
                    key={index}
                    className={`bg-${slide.bgColor} cursor-pointer hover:scale-95 transition-all shadow-md rounded-lg p-2.5 h-[13rem] md:h-[14rem] sm:h-[16rem] lg:h-[16rem]`}
                >
                    <div className={`bg-[#fbab5d] rounded-lg shadow-md flex items-center justify-center h-[4rem] sm:h-[6rem] md:h-[5.5rem] md:w-[9rem] lg:h-[6rem] w-[8rem] sm:w-[10rem] lg:w-[10rem]`}>
                        <img
                            src={slide.imageSrc}
                            alt=""
                            className={`sm:h-[7rem] lg:h-[7rem] md:h-[5rem] md:w-[5rem] h-[4rem] flex items-center lg:w-[7rem] justify-center sm:w-[7rem]`}
                        />
                    </div>
                    <div className="sm:pt-3 pt-3">
                        <p>{slide.title}</p>
                        <p className=" text-xs">{slide.chapters}</p>
                    </div>
                    <div className="flex sm:pt-14 lg:pt-14 md:pt-8 pt-10 items-center justify-between">
                        <div className="flex -space-x-1 overflow-hidden">
                            {slide.avatarImages.map((avatar, avatarIndex) => (
                                <img
                                    key={avatarIndex}
                                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                    src={avatar}
                                    alt=""
                                />
                            ))}
                        </div>
                        <button className={`bg-${slide.bgColor} text-white shadow-md rounded-md w-7 h-7 flex justify-center items-center`}>
                            <IoIosArrowForward className='w-6 h-6'/>
                        </button>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default CustomSlider;

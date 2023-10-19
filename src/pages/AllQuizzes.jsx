import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/Quizz/NavQuizz";
import QuizzDropDownItem from "../components/Quizz/QuizzDropDownItem";

const AllQuizzes = () => {
  const { coursecode } = useParams();

  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    setQuizData([
      {
        unit: "Unit 1",
        topics: [
          "Topic 1.1 leading",
          "Topic 1.2 leading",
          "Topic 1.3 leading",
          "Topic 1.4 leading",
          "Topic 1.5 leading",
          "Topic 1.6 leading",
          "Topic 1.7 leading",
          "Topic 1.8 leading",
        ],
      },
      {
        unit: "Unit 2",
        topics: [
          "Topic 2.1 leading",
          "Topic 2.2 leading",
          "Topic 2.3 leading",
          "Topic 2.4 leading",
          "Topic 2.5 leading",
          "Topic 2.6 leading",
          "Topic 2.7 leading",
          "Topic 2.8 leading",
        ],
      },
      {
        unit: "Unit 3",
        topics: [
          "Topic 3.1 leading",
          "Topic 3.2 leading",
          "Topic 3.3 leading",
          "Topic 3.4 leading",
          "Topic 3.5 leading",
          "Topic 3.6 leading",
          "Topic 3.7 leading",
          "Topic 3.8 leading",
        ],
      },
      {
        unit: "Unit 4",
        topics: [
          "Topic 4.1 leading",
          "Topic 4.2 leading",
          "Topic 4.3 leading",
          "Topic 4.4 leading",
          "Topic 4.5 leading",
          "Topic 4.6 leading",
          "Topic 4.7 leading",
          "Topic 4.8 leading",
        ],
      },
      {
        unit: "Unit 5",
        topics: [
          "Topic 5.1 leading",
          "Topic 5.2 leading",
          "Topic 5.3 leading",
          "Topic 5.4 leading",
          "Topic 5.5 leading",
          "Topic 5.6 leading",
          "Topic 5.7 leading",
          "Topic 5.8 leading",
        ],
      },
      {
        unit: "Unit 6",
        topics: [
          "Topic 6.1 leading",
          "Topic 6.2 leading",
          "Topic 6.3 leading",
          "Topic 6.4 leading",
          "Topic 6.5 leading",
          "Topic 6.6 leading",
          "Topic 6.7 leading",
          "Topic 6.8 leading",
        ],
      },
    ]);
  }, []);

  useEffect(() => {
    // Function to handle scrolling
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = prevScrollPos < currentScrollPos;

      // Determine whether to show or hide the navbar
      if (isScrolledDown && isNavVisible) {
        setIsNavVisible(false);
      } else if (!isScrolledDown || currentScrollPos === 0) {
        setIsNavVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, isNavVisible]);
  return (
    <div className="w-screen">
      <div className="bg-white min-h-screen ">
        <div
          className={`sticky top-0 z-50 transition-all bg-white ${
            isNavVisible
              ? " bg-white opacity-100 transition-all z-50"
              : "opacity-0 transition-all z-50"
          }`}
        >
          <NavBar />
        </div>

        <section className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
          <div className="container mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[540px] sm:text-center lg:mb-20">
                  <span className="mb-2 sm:mb-4 block sm:text-lg text-base font-semibold text-primary">
                    Quizzes
                  </span>
                  <h2 className="mb-4 sm:mb-6 text-2xl font-bold text-dark sm:text-4xl md:text-[40px]">
                    {coursecode}
                  </h2>
                  <p className="sm:text-base text-sm  text-body-color">
                    Explore and test your knowledge on a variety of topics
                    through our interactive quizzes. Select a unit or topic of
                    your choice below to get started. Click on a unit card to
                    reveal the associated topics and quizzes.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap mx-auto w-full">
              <div className="px-4 sm:min-w-[700px] w-screen mx-auto">
                {quizData &&
                  quizData.map(({ unit, topics }) => {
                    return (
                      <QuizzDropDownItem
                        key={unit}
                        unit={unit}
                        topics={topics}
                        coursecode={coursecode}
                      />
                    );
                  })}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 z-[-1]">
            <svg
              width="1440"
              height="886"
              viewBox="0 0 1440 886"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="1308.65"
                  y1="1142.58"
                  x2="602.827"
                  y2="-418.681"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" stopOpacity="0.36" />
                  <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
                  <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllQuizzes;

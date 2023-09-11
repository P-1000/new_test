import React, { useEffect, useState } from 'react';
import TrendingQuizzes from './TrendingQ';
import QuizzesByTopic from './TopicQ';
import QuizzesByExamSection from './ExamByQ';
import UserStats from './UserStats';
import NavBar from './NavQuizz';

function QuizzHome() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

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
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, isNavVisible]);

  return (
    <div className="w-full">
      <div className="bg-white min-h-screen ">
        <div className={`sticky top-0 transition-opacity z-50 transition-all bg-white ${isNavVisible ? ' bg-white opacity-100 transition-all z-50' : 'opacity-0 transition-all z-50'}`}>
          <NavBar />
        </div>

        <main className="mx-14 mt-6">
          <UserStats />
          {/* Trending Quizzes */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Trending Quizzes</h2>
            <TrendingQuizzes />
          </section>

          {/* Quizzes by Topic */}
          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Quizzes by Topic</h2>
            <QuizzesByTopic />
          </section>

          {/* Quizzes by Exam Section */}
          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Quizzes by Exam Section</h2>
            <QuizzesByExamSection />
          </section>
        </main>
      </div>
    </div>
  );
}

export default QuizzHome;

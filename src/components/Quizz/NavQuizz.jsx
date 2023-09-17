import React, { useState, useEffect } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';
import UserProfile from './UserProfile';
import QuizList from './ListQ';

function NavBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const user = {
    name: 'Sasuke Uchiha',
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false); // Close the menu when opening the search
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Add an event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check for screen size
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className={`bg-sky-800 py-4 px-8 shadow-lg z-50 m-4 rounded-2xl relative ${
        isSmallScreen ? 'md:hidden' : ''
      }`}
    >
      {isSmallScreen ? (
        // Small screen navbar with icon
        <div className="flex justify-between items-center">
          <FaBars
            onClick={toggleMenu}
            className="text-white text-2xl cursor-pointer"
          />
          <div className="text-white text-2xl font-bold"> QUIZZ</div>
          <div className="relative md:ml-4">
            <FaSearch
              onClick={toggleSearch}
              className="text-white text-2xl cursor-pointer"
            />
            {isSearchOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 10, y: -100 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute rounded-full top-10 -left-44 px-4 py-3"
              >
                <QuizList onClose={toggleSearch} />
              </motion.div>
            )}
          </div>
        </div>
      ) : (
        // Large screen navbar without icon
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">LMSEDU QUIZZ</div>
          <div className="relative md:ml-4">
            {isSearchOpen ? (
              <div>
                <QuizList onClose={toggleSearch} />
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <QuizList onClose={toggleSearch} />
              </motion.div>
            )}
          </div>
          <ul
            className={`md:flex md:space-x-6 absolute text-white z-50 ${
              isMenuOpen ? 'block' : 'hidden'
            } md:block absolute top-16 left-0 right-0 z-50 bg-sky-800 md:bg-transparent md:relative md:flex-row md:p-0 md:space-x-0 md:space-y-0 md:top-auto md:left-auto`}
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="quizz/my-quizzes">My Quizzes</a>
            </li>
            <li>
              <a href="quizz/categories">Categories</a>
            </li>
            <li>
              <a href="quizz/leaderboard">Leaderboard</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
          </ul>
        </div>
      )}
    </motion.div>
  );
}

export default NavBar;

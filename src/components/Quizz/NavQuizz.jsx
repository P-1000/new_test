import React from 'react';
import UserProfile from './UserProfile'; // Import the UserProfile component
import QuizList from './ListQ';

function NavBar() {

    const user = {
        name: 'Sasuke Uchiha',
    };

  return (
    <nav className="bg-white py-4 px-8 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-black text-2xl font-bold">LMSEDU QUIZZ</div>

        {/* Search Bar */}
        <div className="relative">
            <QuizList />
          <span className="absolute top-2 right-3 text-gray-500">
            {/* Add search icon here */}
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-primary">
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

        {/* User Profile */}
        <div className="flex items-center space-x-4">
          {/* Include the UserProfile component here */}
          <UserProfile user={user} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

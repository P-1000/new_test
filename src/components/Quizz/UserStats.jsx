import React from 'react';
import { FaFileAlt, FaQuestionCircle, FaTrophy, FaUser } from 'react-icons/fa'; // Import React Icons

// Sample user stats data (replace with your actual data)
const userStats = {
  quizzesTaken: 15,
  totalQuestionsAnswered: 300,
  userRank: 5, // Rank within the website
  averageScore: 85,
  badgesEarned: 3,
  streak: 5,
};

const statsIcons = {
  quizzesTaken: <FaFileAlt />,
  totalQuestionsAnswered: <FaQuestionCircle />,
  userRank: <FaUser />,
  averageScore: <FaTrophy />,
  badgesEarned: <FaTrophy />,
  streak: <FaTrophy />,
};

function UserStats() {
  return (
    <div className="rounded-lg p-4 mb-4 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">User Statistics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Object.keys(userStats).map((statName, index) => (
          <div
            key={index}
            className="rounded-lg p-4 border  transition transform hover:scale-105"
          >
            <div className="flex items-center justify-between mb-2">
              {/* Stat Icon */}
              <div className="text-3xl">{statsIcons[statName]}</div>
              {/* Stat Name */}
              <p className="text-lg font-semibold">{statName}</p>
            </div>
            {/* Stat Value */}
            <p className="text-3xl font-semibold">{userStats[statName]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserStats;

import React from 'react';
import { FaArrowRight, FaFileAlt, FaQuestionCircle, FaTrophy, FaUser } from 'react-icons/fa'; 
import picture from '../../assets/home/picture2.png';

// Sample user stats data (replace with your actual data)
const userStats = {
  quizzesTaken: 15,
  // totalQuestionsAnswered: 300,
  userRank: 5, // Rank within the website
  averageScore: 85,
  badgesEarned: 3,
  streak: 5,
};

const statsIcons = {
  quizzesTaken: <FaFileAlt />,
  // totalQuestionsAnswered: <FaQuestionCircle />,
  userRank: <FaUser />,
  averageScore: <FaTrophy />,
  badgesEarned: <FaTrophy />,
  streak: <FaTrophy />,
};

function UserStats() {
  return (
    <div className="rounded-lg p-4 mb-4">
      {/* <h2 className="text-2xl font-semibold mb-4">User Statistics</h2> */}
      <div className='flex lg:flex-row flex-col justify-between'>
        <div className='lg:w-[70%] w-[100%] bg-gradient-to-l from-indigo-900 to-sky-800 rounded-3xl shadow-xl'>
          <h2 className='text-2xl text-white p-6 font-bold'>Take assessments based on your<br />  prefered subject</h2>
          <div className='flex flex-col lg:flex-row lg:justify-between items-center lg:items-end'>
            <button className='text-sky-800 bg-white h-[40px] flex items-center m-[20px] rounded-full py-2 px-4 shadow-lg font-semibold hover:scale-105 transition ease-in hover:font-bold'>Explore Quizzes<FaArrowRight className='inline ml-2' /></button>
            <img src={picture} className='w-3/5 ' />
          </div>
        </div>
        <div className='lg:w-[30%] w-[100%] m-auto'>
          <div className='flex flex-col justify-center items-center lg:items-end'>
            <div className='border flex lg:w-5/6 w-full my-3 justify-between p-4 hover:scale-105 transition-all cursor-pointer rounded-3xl bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg'>
              <div className='border-b shadow flex items-center p-4 rounded-2xl bg-white'>
                <FaTrophy className='text-3xl text-orange-600'/>
              </div>
              <div className='flex flex-col mr-3 items-end'>
                <h2 className='text-2xl font-bold text-white'>154</h2>
                <h4 className='text-white capitalize'> USER RANK</h4>
              </div>
            </div>
            <div className='border flex lg:w-5/6 w-full my-3 justify-between p-4 hover:scale-105 transition-all cursor-pointer rounded-3xl bg-gradient-to-r from-rose-400 to-red-500 shadow-lg'>
              <div className='border-b shadow flex items-center p-4 rounded-xl bg-white'>
                <FaFileAlt className='text-3xl text-red-700'/>
              </div>
              <div className='flex flex-col mr-3 items-end'>
                <h2 className='text-2xl font-bold text-white'>154</h2>
                <h4 className='text-white'> TOTAL ASSESSMESNTS</h4>
              </div>
            </div>
            <div className='border flex lg:w-5/6 w-full my-3 justify-between p-4 hover:scale-105 transition-all cursor-pointer rounded-3xl bg-gradient-to-l from-emerald-400 to-cyan-400 shadow-lg'>
              <div className='border-b shadow flex items-center p-4 rounded-xl bg-white'>
                <FaUser className='text-3xl text-cyan-700'/>
              </div>
              <div className='flex flex-col mr-3 items-end'>
                <h2 className='text-2xl font-bold text-white'>154</h2>
                <h4 className='text-white'> ATTEMPTED QUIZZES</h4>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>

  );
}

export default UserStats;

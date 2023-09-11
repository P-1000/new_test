import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { motion } from 'framer-motion';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkR4MESgjh20z9yaM1s1AXX99qquDn2ss",
  authDomain: "sanfoundry-sc.firebaseapp.com",
  projectId: "sanfoundry-sc",
  storageBucket: "sanfoundry-sc.appspot.com",
  messagingSenderId: "527997111994",
  appId: "1:527997111994:web:35a22b150a14f2e3c1bc83",
  measurementId: "G-8Q04XQCCSR"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

function QuizList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [quizzes, setQuizzes] = useState([]);

  // Fetch quizzes from Firebase
  const fetchQuizzesFromFirebase = async () => {
    const quizCollection = collection(db, 'quizzes');
    const quizSnapshot = await getDocs(quizCollection);
    const quizList = [];
    quizSnapshot.forEach((doc) => {
      quizList.push({ id: doc.id, ...doc.data() });
    });
    setQuizzes(quizList);
  };

  useEffect(() => {
    fetchQuizzesFromFirebase();
  }, []);

  const filteredQuizzes = quizzes.filter((quiz) => {
    const name = quiz.name || ''; // Default to an empty string if name is undefined
    const courseCode = quiz.courseCode || ''; // Default to an empty string if courseCode is undefined
  
    return (
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      courseCode.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div>
      <input
        type="text"
        className='border-b outline-none focus:outline-none 
        focus:border-b-2 focus:border-blue-500
        focus:pr-10 transition-all duration-500 ease-in-out '
        placeholder="Search quizzes"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {searchTerm !== '' && (
        <ul className="absolute mt-2 w-full">
          {filteredQuizzes.map((quiz) => (
            <motion.li
              key={quiz.id}
              className="bg-white hover:bg-blue-200 flex rounded-lg shadow-md p-4 my-2 transition duration-300 ease-in-out transform hover:scale-105"
              initial={{ opacity: 0, y: -10, x: 10, scale: 0.99, rotate: 0 }}
              animate={{ opacity: 1, y: 0, x: 0, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, y: 10, x: 10, scale: 0.9, rotate: 0 }}
              transition={{ duration: 0.2 }}
              variants={fadeInVariants}
            >
              <div className="w-1/2">
                <p className="text-sm font-semibold">{quiz.name}</p>
                <p className="text-xs">Course Code: {quiz.courseCode}</p>
              </div>
              <div className="w-1/2 text-right">
                <p className="text-xs">Questions: {quiz.questions}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default QuizList;

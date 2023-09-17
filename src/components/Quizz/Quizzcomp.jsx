import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  query,
  where,
  getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDkR4MESgjh20z9yaM1s1AXX99qquDn2ss",
  authDomain: "sanfoundry-sc.firebaseapp.com",
  projectId: "sanfoundry-sc",
  storageBucket: "sanfoundry-sc.appspot.com",
  messagingSenderId: "527997111994",
  appId: "1:527997111994:web:35a22b150a14f2e3c1bc83",
  measurementId: "G-8Q04XQCCSR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const QuizComponent = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [optionsDisabled, setOptionsDisabled] = useState(false);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const courseCode = 'REACT'; 
  const unit = 'UNIT-1'; 
  const quizName = 'REACT'; 

  const history = useNavigate();

  useEffect(() => {
    // Create a reference to the quizzes collection within the specified unit
    const quizzesCollectionRef = collection(
      doc(db, 'courses', courseCode),
      unit
    );

    // Define a query to get the quiz document with the specified quizName
    const q = query(
      quizzesCollectionRef,
      where('quizTitle', '==', quizName)
    );

    // Fetch the quiz document
    getDocs(q)
      .then((querySnapshot) => {
        if (querySnapshot.docs.length === 1) {
          const quizDoc = querySnapshot.docs[0];
          const quizDataFromFirestore = quizDoc.data();
          setQuizData(quizDataFromFirestore.quizData || []);
        } else {
          console.log('No matching quiz found');
        }
      })
      .catch((error) => {
        console.error('Error fetching quiz: ', error);
      });
  }, [courseCode, unit, quizName]);

  const handleClose = () => {
    history(-1);
  };

  const handleOptionSelect = (option) => {
    if (!optionsDisabled) {
      const correctAnswer = quizData[currentQuestion].answer;
      setSelectedOption(option);
      setShowExplanation(true);
      setOptionsDisabled(true);
      setIsLastQuestion(currentQuestion === quizData.length - 1);

      if (option.charAt(0).toLowerCase() === correctAnswer.toLowerCase()) {
        setScore(score + 1);
      }

      const updatedSelectedAnswers = [...selectedAnswers];
      updatedSelectedAnswers[currentQuestion] = option;
      setSelectedAnswers(updatedSelectedAnswers);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowExplanation(false);
      setOptionsDisabled(false);
      setIsLastQuestion(false);
    }
  };

  const handleFinishQuiz = () => {
    setQuizCompleted(true);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setOptionsDisabled(false);
    setIsLastQuestion(false);
    setScore(0);
    setQuizCompleted(false);
    setReviewMode(false);
    setSelectedAnswers([]);
  };

  const handleReview = () => {
    setReviewMode(true);
  };

  return (
    <div className="min-h-screen w-[100vw]  flex items-center justify-center bg-white">
      <div className="bg-white shadow-xl border p-6 lg:p-8 rounded-lg  lg:w-[60%] relative">
        <button
          className="bg-red-500 text-white px-2 py-1 rounded-full absolute top-2 right-2"
          onClick={handleClose}
        >
          Close
        </button>
        {quizCompleted ? (
          <div>
            {reviewMode ? (
              <>
                <h2 className="text-2xl text-teal-500 font-bold mb-4">
                  Review Mode
                </h2>
                <ul>
                  {quizData.map((question, index) => (
                    <li key={index}>
                      <p>{question.question}</p>
                      <p>Your Answer: {selectedAnswers[index]}</p>
                      <p>Correct Answer: {question.answer}</p>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <h2 className="text-2xl text-teal-500 font-bold mb-4">
                  Quiz Completed
                </h2>
                <p className="text-black">
                  Your Score: {score}/{quizData.length}
                </p>
                <button
                  className="bg-blue-500 text-black px-4 py-2 rounded-md mt-4"
                  onClick={handleReview}
                >
                  Review
                </button>
              </>
            )}
            <button
              className="bg-blue-500 text-black px-4 py-2 rounded-md mt-4"
              onClick={handleRestartQuiz}
            >
              Restart
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl text-teal-500 font-bold mb-4">
              Question {currentQuestion + 1}:
            </h2>
            <p className="text-black font-bold">
              {quizData[currentQuestion]?.question}
            </p>
            <div className="mt-4">
              {quizData[currentQuestion]?.options.map((option, index) => (
                <div
                  key={index}
                  className={`${
                    optionsDisabled
                      ? option.charAt(0).toLowerCase() ===
                        quizData[currentQuestion].answer.toLowerCase()
                        ? 'bg-green-300'
                        : selectedOption === option
                        ? 'bg-red-300'
                        : 'bg-white border hover:bg-blue-200'
                      : 'border pointer-events-auto hover:bg-blue-200'
                  } p-2 rounded-md cursor-pointer mb-2`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>
            {showExplanation && (
              <div className="mt-4 text-black">
                {quizData[currentQuestion]?.explanation}
              </div>
            )}
            <div className="mt-4">
              {isLastQuestion ? (
                <button
                  className="bg-blue-500 text-black px-4 py-2 rounded-md"
                  onClick={handleFinishQuiz}
                >
                  Finish
                </button>
              ) : selectedOption && (
                <button
                  className="bg-blue-500 text-black px-4 py-2 rounded-md"
                  onClick={handleNextQuestion}
                >
                  {currentQuestion < quizData.length - 1 ? 'Next' : 'Finish'}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;

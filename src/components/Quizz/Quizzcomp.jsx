import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import quizData from './quizdata';
import {motion} from 'framer-motion';

const QuizComponent = () => {


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [optionsDisabled, setOptionsDisabled] = useState(false);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(quizData.length).fill(null));

  const history = useNavigate(); // Create a history object

  const handleClose = () => {
    // Navigate back when the close button is clicked
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
    setSelectedAnswers(Array(quizData.length).fill(null));
  };

  const handleReview = () => {
    setReviewMode(true);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center bg-white">
      <div className="bg-white shadow-xl border p-8 rounded-lg w-[60%] relative">
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
                <h2 className="text-2xl text-teal-500 font-bold mb-4">Review Mode</h2>
                <ul>
                  {quizData.map((question) => (
                    <li key={question.id}>
                      <p>{question.question}</p>
                      <p>Your Answer: {selectedAnswers[question.id - 1]}</p>
                      <p>Correct Answer: {question.answer}</p>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <h2 className="text-2xl text-teal-500 font-bold mb-4">Quiz Completed</h2>
                <p className="text-black">Your Score: {score}/{quizData.length}</p>
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
            <p className='text-black font-bold'>{quizData[currentQuestion].question}</p>
            <div className="mt-4">
              {quizData[currentQuestion].options.map((option, index) => (
                <motion.div
                transition={{duration:.3 , type:'spring' , stiffness:100}}
                  key={index}
                  className={`${
                    optionsDisabled
                      ? option.charAt(0).toLowerCase() === quizData[currentQuestion].answer.toLowerCase()
                        ? 'bg-green-500'
                        : selectedOption === option
                        ? 'bg-red-500'
                        : 'bg-gray-300'
                      : 'border pointer-events-auto hover:bg-blue-200'
                  } p-2 rounded-md cursor-pointer mb-2`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </motion.div>
              ))}
            </div>
            {showExplanation && (
              <motion.div 
              initial={{opacity:0 ,  scale:0.9}}
              animate={{opacity:1 , scale:1}}
              transition={{duration:.3 , type:'spring' , stiffness:100}}
              className="mt-4 text-black ">
                {quizData[currentQuestion].explanation}
              </motion.div>
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

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample data for quizzes by exam section (replace with your actual data)
const quizzesByExamSection = [
  {
    id: 1,
    examType: 'MTE Pre Quiz',
    courseCode: 'CSE320',
    title: 'MTE Pre Quiz for CSE320',
    imageUrl: 'https://img.freepik.com/free-vector/college-entrance-exam-concept-illustration_114360-10202.jpg?w=1380&t=st=1694207283~exp=1694207883~hmac=da73ef7ecde7929899b11efc6eadcbbedfd777b21ddbeea608d479bb01015d50',
    duration: '30 minutes',
    questions: 20,
  },
  {
    id: 2,
    examType: 'MTE Pre Quiz',
    courseCode: 'CSE350',
    title: 'MTE Pre Quiz for CSE350',
    imageUrl: 'https://img.freepik.com/free-vector/stressed-millennial-guy-studying-before-college-exams-distressed-student-meeting-deadline-doing-assignment-preparing-test-home-with-books-flat-illustration_74855-20731.jpg?w=1800&t=st=1694207327~exp=1694207927~hmac=39bcae7d689120a77c52d9aa7617a5f2bac2ee4099fc00c004ed9f923876265d',
    duration: '30 minutes',
    questions: 20,
  },
  {
    id: 3,
    examType: 'MTE Pre Quiz',
    courseCode: 'CSE390',
    title: 'MTE Pre Quiz for CSE390',
    imageUrl: 'https://img.freepik.com/free-vector/exams-concept-illustration_114360-2754.jpg?w=1380&t=st=1694207315~exp=1694207915~hmac=5a32c3ed5609c0ebca728131ab5693be81aa8e79d9c01d2ad9766d43a824aedf',
    duration: '30 minutes',
    questions: 20,
  },
  {
    id: 4,
    examType: 'MTE Pre Quiz',
    courseCode: 'INT219',
    title: 'MTE Pre Quiz for INT219',
    imageUrl: 'https://img.freepik.com/free-vector/college-entrance-exam-concept-illustration_114360-13742.jpg?w=1380&t=st=1694207299~exp=1694207899~hmac=4794e27c8f69447ba046f33a5eb3ebb33c905e3bf937c7cbf74e851bb53c737e',
    duration: '50 minutes',
    questions: 20,
  },
  {
    id: 3,
    examType: 'MTE Pre Quiz',
    courseCode: 'CSE390',
    title: 'MTE Pre Quiz for CSE390',
    imageUrl: 'https://img.freepik.com/free-vector/exams-concept-illustration_114360-2754.jpg?w=1380&t=st=1694207315~exp=1694207915~hmac=5a32c3ed5609c0ebca728131ab5693be81aa8e79d9c01d2ad9766d43a824aedf',
    duration: '30 minutes',
    questions: 20,
  },
  // Add more quiz items as needed
];

function QuizzesByExamSection() {
  // Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of quizzes shown at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className="slick-container">
        <Slider {...sliderSettings}>
          {quizzesByExamSection.map((quiz) => (
            <div key={quiz.id} className="mx-2">
              <div className="bg-white mx-2 rounded-lg shadow-md">
                <img
                  src={quiz.imageUrl}
                  alt={quiz.title}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{quiz.title}</h3>
                  <p className="text-sm text-gray-500">{quiz.examType}</p>
                  <p className="text-sm text-gray-500">Course Code: {quiz.courseCode}</p>
                  <p className="text-sm text-gray-500">Duration: {quiz.duration}</p>
                  <p className="text-sm text-gray-500">Questions: {quiz.questions}</p>
                  {/* Add any other quiz information you want to display */}
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Start Quiz
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default QuizzesByExamSection;

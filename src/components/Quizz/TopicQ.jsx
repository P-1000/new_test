import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample data for quizzes by topic (replace with your actual data)
const quizzesByTopic = [
  { id: 1, topic: 'Mathematics', title: 'Math Quiz 1', imageUrl: 'https://img.freepik.com/free-vector/people-with-education-related-icons_53876-59898.jpg?w=1800&t=st=1694206354~exp=1694206954~hmac=70b296d96fa5a7f9ff62493e0f495cb886201d117e6948e0ce939697c9cf2f2e' },
  { id: 2, topic: 'Science', title: 'Science Quiz 1', imageUrl: 'https://img.freepik.com/free-vector/laptop-with-scientist-kid-cartoon-character_1308-77427.jpg?w=1480&t=st=1694206402~exp=1694207002~hmac=9e1f3a2bcd2ff8634f2b95570cb5167c1601deb6e1fe1bd9d1890431ba045a12' },
  { id: 3, topic: 'History', title: 'History Quiz 1', imageUrl: 'https://img.freepik.com/free-vector/vintage-books-with-paper-scroll-feather-ink-pot-colored-sketch-decorative-concept-vector-illustration_1284-2997.jpg?w=1380&t=st=1694206449~exp=1694207049~hmac=7a332654563135fea4bfaba624bc38d2784627ca19aef79aaa384eed64857031' },
  { id: 4, topic: 'Science', title: 'Science Quiz 2', imageUrl: 'https://img.freepik.com/free-vector/spreadsheets-concept-illustration_114360-754.jpg?w=1380&t=st=1694206421~exp=1694207021~hmac=79bfc19f1e1f9f6300cd62c545a33c79219cb214b361ff417b48eea5e401f37c' },
  { id: 5, topic: 'History', title: 'History Quiz 1', imageUrl: 'https://img.freepik.com/free-vector/pirate-story-book_1051-554.jpg?w=1380&t=st=1694206465~exp=1694207065~hmac=f94b6cd7100d6c1ae97aa9f7d012d62762166c50b69fb4bf7ebaefde0d23349c' },
  { id: 6, topic: 'Science', title: 'Science Quiz 1', imageUrl: 'https://img.freepik.com/free-vector/student-stress-concept-illustration_114360-9550.jpg?w=1380&t=st=1694206435~exp=1694207035~hmac=e051430cbd5425d55fa01e4e3ddb0ad2cc20e3c7c65c9e90d06a7267d76593db' },
  { id: 7, topic: 'History', title: 'History Quiz 1', imageUrl: 'https://img.freepik.com/free-vector/people-visiting-history-museum-concept-illustration_114360-2732.jpg?w=1380&t=st=1694206482~exp=1694207082~hmac=db80d864df05a2f1716916822754e1b12b32231f6a8738cc04e68d7428745504' },
];

function QuizzesByTopic() {
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
          {quizzesByTopic.map((quiz) => (
            <div key={quiz.id} className="mx-2">
              <div className="bg-white mx-2 rounded-lg shadow-md">
                <img
                  src={quiz.imageUrl}
                  alt={quiz.title}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{quiz.title}</h3>
                  <p className="text-sm text-gray-500">{quiz.topic}</p>
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

export default QuizzesByTopic;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import  "./custom.css"
import {motion} from "framer-motion"

// Sample data for trending quizzes (replace with your actual data)
const trendingQuizzes = [
  { id: 1, title: 'Trendy Quiz 1', imageUrl: 'https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg?w=1380&t=st=1694206109~exp=1694206709~hmac=36edbc00f40fb5b074bf4c34d2525de97a8bc8e05a76409f2caf2a82d5aed28c' },
  { id: 2, title: 'Trendy Quiz 2', imageUrl: 'https://img.freepik.com/free-vector/online-learning-concept-illustration_114360-6494.jpg?w=1380&t=st=1694205945~exp=1694206545~hmac=661f78c8406bd0c1930641d299a4098b87048eb0cac1740331c19e6351903ff5' },
  { id: 3, title: 'Trendy Quiz 3', imageUrl: 'https://img.freepik.com/free-vector/illustrated-woman-being-intern-company_23-2148726151.jpg?w=1380&t=st=1694205944~exp=1694206544~hmac=bf484fada869c94345d9d048c24092da34d1495dc2be0486c27477408de330f5' },
  { id: 4, title: 'Trendy Quiz 4', imageUrl: 'https://img.freepik.com/free-vector/top-view-hands-holding-books-flat-illustration_74855-17930.jpg?t=st=1694205940~exp=1694206540~hmac=ce258ac0e3094f00dd476a5cd6c406d66d1c074b708af9ca7864d9448ebcbf18' },
  { id: 5, title: 'Trendy Quiz 5', imageUrl: 'https://img.freepik.com/free-vector/online-education-worldwide-cartoon-composition-with-graduation-cap-students-sitting-smartphone-books-pile-hourglass_1284-60048.jpg?w=1800&t=st=1694206036~exp=1694206636~hmac=4c30862407d8da53dca443c96fd517de503597c074d2a8e02a72d8c76bf33895' },
  { id: 6, title: 'Trendy Quiz 6', imageUrl: 'https://img.freepik.com/free-vector/telecommuting-concept-illustration_52683-36162.jpg?w=2000&t=st=1694206045~exp=1694206645~hmac=948ebcbf3425b91ef954eff3103832946806ce464ec98e14e6e5e0c3fb213470' },
  // Add more quiz items as needed
];

function TrendingQuizzes() {
  // Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of quizzes shown at once
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
          {trendingQuizzes.map((quiz) => (
            <motion.div key={quiz.id} className="mx-4">
              <div className=" rounded-lg mx-2 border hover:scale-95 transition-all shadow-md">
                <img
                  src={quiz.imageUrl}
                  alt={quiz.title}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{quiz.title}</h3>
                  {/* Add any other quiz information you want to display */}
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Start Quiz
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default TrendingQuizzes;

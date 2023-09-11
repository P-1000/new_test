import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationNumberStep = () => {
  const [registrationNumber, setRegistrationNumber] = useState(['', '', '', '', '', '', '', '']);

  const navigate = useNavigate();
  const inputRefs = Array.from({ length: 8 }, () => useRef());

  const handleInputChange = (e, index) => {
    const newRegistrationNumber = [...registrationNumber];
    newRegistrationNumber[index] = e.target.value;

    // Move focus to the next input if a digit is entered
    if (e.target.value && index < 7) {
      inputRefs[index + 1].current.focus();
    }

    setRegistrationNumber(newRegistrationNumber);
  };

  const handleNext = () => {
    const enteredNumber = registrationNumber.join('');
    
    // Validate registrationNumber and proceed to the next step if valid
    if (enteredNumber.length === 8) {
      navigate('/name'); // Redirect to the next step
    } else {
      alert('Please enter a valid 8-digit registration number.');
    }
  };

  return (
    <div
      className="bg-8a70d6 min-h-screen flex justify-center items-center"
      style={{ backgroundColor: '#8a70d6' }}
    >
      <div className="text-white text-center">
        <h2 className="text-2xl font-semibold mb-4">Step 1: Registration Number</h2>
        <div className="flex justify-center mb-6">
          {inputRefs.map((ref, index) => (
            <input
              key={index}
              ref={ref}
              type="text"
              className="mx-1 text-white bg-transparent border-b-2 border-white outline-none w-10 text-center"
              maxLength="1"
              value={registrationNumber[index] || ''}
              onChange={(e) => handleInputChange(e, index)}
            />
          ))}
        </div>
        <button
          className="bg-white text-8a70d6 py-2 px-4 rounded-md hover:bg-opacity-80"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RegistrationNumberStep;

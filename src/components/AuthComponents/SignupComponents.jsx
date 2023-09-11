import React, { useState } from 'react';
import axios from 'axios';
import {toast , Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const SignupForm = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRegistrationNumberChange = (e) => {
    setRegistrationNumber(e.target.value);
  };


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!registrationNumber ||  !email || !phoneNumber || !password) {
        toast.error('Please fill all the fields')
        return
    }
    if(!email.includes('@')) {
        toast.error('Please enter a valid email')
        return
    }
    if(phoneNumber.length !== 10) {
        toast.error('Please enter a valid phone number')
        return
    }
    if(password.length < 6) {
        toast.error('Password must be atleast 6 characters long')
        return
    }

    if(!registrationNumber.startsWith('12') || registrationNumber.length !== 8) {
        toast.error('Please enter a valid registration number')
        return
    }


    try {
        const response = axios.post('http://localhost:8000/api/auth/signup' , {
            registrationNumber: registrationNumber,
            email: email,
            phoneNumber: phoneNumber,
        }).then((res) => {
            toast.success('User registered successfully')
            navigate('/login')
            window.location.href = '/login'
        }).catch((err) => {
            toast.error('Error registering user')
        })

    } catch (error) {
        console.log(error)
    }
  };

  return (
    <
div className =" h-full w-full bg-primary 
rounded-md bg-clip-padding 
backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100 ">


    <div className="w-full max-w-md p-6 bg-opacity-20   rounded-md">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4 text-black">Signup</h2>
        {/* Registration Number */}
        <div className="mb-4">
          <label htmlFor="registrationNumber" className="block font-medium mb-1 text-gray-darkest">Registration Number</label>
          <input
            type="text"
            id="registrationNumber"
            className="w-full p-2 bg-transparent border rounded-md text-gray-darkest placeholder-white"
            placeholder="Enter your registration number"
            value={registrationNumber}
            onChange={handleRegistrationNumberChange}
          />
        </div>
        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1 text-gray-darkest">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 bg-transparent border rounded-md text-gray-darkest placeholder-white"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-1 text-gray-darkest">Password</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 bg-transparent border rounded-md text-gray-darkest placeholder-white"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {/* Submit Button */}
        <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
          Sign Up
        </button>
      </form>
    </div>
    <Toaster/>
    </div>
  );
};

export default SignupForm;

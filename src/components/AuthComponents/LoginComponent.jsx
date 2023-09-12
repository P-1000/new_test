import React, { useState } from 'react';
import axios from 'axios';
import {toast , Toaster} from 'react-hot-toast';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {setInitialAttendance} from '../../Redux/AttendanceSlice'
import { setUserProfile } from '../../Redux/ProfileSlice';


const LoginComponent = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');

    const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleRegistrationNumberChange = (e) => {
    setRegistrationNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!registrationNumber || !password) {
        toast.error('Please fill all the fields')
        return
    }
    if(!registrationNumber.startsWith('12') || registrationNumber.length !== 8) {
        toast.error('Please enter a valid registration number')
        return
    }


    try {
        const res = await axios.post('https://clientback-xa21.onrender.com/api/auth/login' , {
            registrationNumber: registrationNumber,
            password: password,
        })
        const data = await res.data
        console.log(data.dat , "dat")
        // const daat = data.dat

      if(res.status === 200) {
        console.log(res)
        dispatch(setUserProfile(res.data.dat));
        localStorage.setItem('user', JSON.stringify(res.data.dat));
          Cookies.set('token', data.token, {expires: 7 , path: '/' });
         navigate('/dashboard')
      }
      
      try {
        // const profile = await axios.post('https://flaskappdeploy.azurewebsites.net/profile' , {
        //   registration : registrationNumber,
        //   password  : password
        // })

        // if(profile.status === 200) {
        //   dispatch(setUserProfile(profile.data));
        //   localStorage.setItem('user', JSON.stringify(profile.data));
        // }

        const attendance = await axios.post('https://flaskappdeploy.azurewebsites.net/atd_summary' , {
          registration : registrationNumber,
           password  : password
        })

        const inf = await axios.post('https://flaskappdeploy.azurewebsites.net/info' , {
          registration : registrationNumber,
           password  : password
        })

        const grades = await axios.post('https://flaskappdeploy.azurewebsites.net/grades' , {
          registration : registrationNumber,
           password  : password
        })
     

        if(attendance.status === 200) {
          dispatch(setInitialAttendance(attendance.data));
          localStorage.setItem('attendance', JSON.stringify(attendance.data));
        }

        if(grades.status === 200) {
          localStorage.setItem('grades', JSON.stringify(grades.data));
        }

        // cgpa info fetch 
       

        if(inf.status === 200) {
          localStorage.setItem('info' , JSON.stringify(inf.data)) 
        }

      } catch (error) {
        toast.error('Please fill all the fields')
      }

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
        <h2 className="text-2xl font-semibold mb-4 text-black">Login with Your UMS ID</h2>
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
         Login
        </button>
      </form>
    </div>
    <Toaster/>
    </div>
  );
};

export default LoginComponent;

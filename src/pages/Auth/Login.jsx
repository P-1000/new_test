import React from 'react'
import LoginComponent from '../../components/AuthComponents/LoginComponent.jsx'
import MyLottieAnimation from '../../components/AuthComponents/signupsteps/Lottie.jsx'
import photo from '../../assets/home/login.png';
import {BsArrowLeftCircle} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex w-[90vw] bg-gradient-to-l from-sky-900 to-cyan-800 h-[90vh] my-6 rounded-3xl shadow-lg shadow-sky-900/40 '>
        <div className=' flex flex-col items-start justify-center'>
          <Link to={"/"}>
          <p className='px-20 text-xs flex items-center hover:scale-110 transition ease-in duration-200 cursor-pointer justify-center text-gray-200 opacity-80'><BsArrowLeftCircle className="text-lg"/> &nbsp; &nbsp;Back to Home</p>
          </Link>
          <img src={photo} className=''/>
    {/* <MyLottieAnimation /> */}
        </div>
        <div className='w-full flex items-center justify-center'>
        <LoginComponent />
        </div>
    </div>
  )
}

export default Login

import React from 'react'
import LoginComponent from '../../components/AuthComponents/LoginComponent.jsx'
import MyLottieAnimation from '../../components/AuthComponents/signupsteps/Lottie.jsx'

const Login = () => {
  return (
    <div className='flex bg-white h-[100vh]'>
        <div>
    <MyLottieAnimation />
        </div>
        <div className='w-full h-[80vh] pt-20'>
        <LoginComponent />
        </div>
    </div>
  )
}

export default Login

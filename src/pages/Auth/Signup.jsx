import React from 'react';
import MyLottieAnimation from '../../components/AuthComponents/signupsteps/Lottie';
import SignupForm from '../../components/AuthComponents/SignupComponents';

const SignupPage = () => {
  return (
    <div className="flex justify-between items-center h-screen gap-3  bg-white">
      <div className="w-1/2 ">
        <MyLottieAnimation />
      </div>
      <div className="w-1/2 rounded-3xl ">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;

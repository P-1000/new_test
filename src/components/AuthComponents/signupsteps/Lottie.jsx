import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const MyLottieAnimation = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://lottie.host/3240b162-da84-4abe-b3b4-b2acce3ae202/uU1eiLUxsH.json',
    });
  }, []);

  return (
    <div ref={animationContainer} style={{ width: '650px', height: '700px' }}></div>
  );
};

export default MyLottieAnimation;

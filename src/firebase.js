import { initializeApp } from 'firebase/app';

// Replace with your actual Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkR4MESgjh20z9yaM1s1AXX99qquDn2ss",
    authDomain: "sanfoundry-sc.firebaseapp.com",
    projectId: "sanfoundry-sc",
    storageBucket: "sanfoundry-sc.appspot.com",
    messagingSenderId: "527997111994",
    appId: "1:527997111994:web:35a22b150a14f2e3c1bc83",
    measurementId: "G-8Q04XQCCSR"
  };

const app = initializeApp(firebaseConfig);

export default app;

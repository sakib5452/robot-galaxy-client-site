// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBz8vqOvInTMpclwGBRAVhDjtjdTjWPRis",
    authDomain: "robot-galaxy-auth.firebaseapp.com",
    projectId: "robot-galaxy-auth",
    storageBucket: "robot-galaxy-auth.appspot.com",
    messagingSenderId: "73204825371",
    appId: "1:73204825371:web:f77a7ef57b12d94dd6a7be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
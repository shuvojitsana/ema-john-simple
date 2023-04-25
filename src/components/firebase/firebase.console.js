// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfZ_G5Q1WfZACb2wtxSBZCUrTbNW6k4FU",
  authDomain: "ema-john-with-firebase-a-caf50.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-caf50",
  storageBucket: "ema-john-with-firebase-a-caf50.appspot.com",
  messagingSenderId: "395763561164",
  appId: "1:395763561164:web:093433f25680e6aaf14869"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
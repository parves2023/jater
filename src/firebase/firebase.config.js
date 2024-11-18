// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhz5eNr7d6QInkadg_MaNvVPtO_qFrSh8",
  authDomain: "lingo-bingo.firebaseapp.com",
  projectId: "lingo-bingo",
  storageBucket: "lingo-bingo.firebasestorage.app",
  messagingSenderId: "952906610722",
  appId: "1:952906610722:web:e1ef891488dc0ef40bb27b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
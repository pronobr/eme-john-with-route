// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_F9zwTcMLoExCjHTA0pwPufNlkBdru7A",
  authDomain: "next-d4055.firebaseapp.com",
  projectId: "next-d4055",
  storageBucket: "next-d4055.appspot.com",
  messagingSenderId: "198657028139",
  appId: "1:198657028139:web:f61305bce152994d50fa6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)

export default auth;
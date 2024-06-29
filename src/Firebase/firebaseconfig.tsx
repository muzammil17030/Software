// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhhK7QNwI-J5ShEdvznjoDl5CjpC8KDHs",
  authDomain: "schooling-software.firebaseapp.com",
  databaseURL: "https://schooling-software-default-rtdb.firebaseio.com",
  projectId: "schooling-software",
  storageBucket: "schooling-software.appspot.com",
  messagingSenderId: "782747203624",
  appId: "1:782747203624:web:a62c0d2e9971ad555c1d1d",
  measurementId: "G-L7GK3KZF31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
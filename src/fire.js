// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA96br7IhwVuR9oXA-9EYn5UaNbbou-vs0",
  authDomain: "ijamyportfolio.firebaseapp.com",
  projectId: "ijamyportfolio",
  storageBucket: "ijamyportfolio.appspot.com",
  messagingSenderId: "863774153738",
  appId: "1:863774153738:web:1e9777cf3a2994583753f3",
  measurementId: "G-9H0M45H6M7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
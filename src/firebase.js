// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCEQ6h1y1EYH8O0XKwnwVkmGZ83rANCc0",
  authDomain: "convene-app-750be.firebaseapp.com",
  projectId: "convene-app-750be",
  storageBucket: "convene-app-750be.appspot.com",
  messagingSenderId: "448125146247",
  appId: "1:448125146247:web:f2d06af7fc6fd2c8ba9422",
  measurementId: "G-H6KHT4P21Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
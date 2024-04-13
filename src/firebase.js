// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN6LVtUvgoxOWTri6Q_N4HIGLMLhaqa_Q",
  authDomain: "convene-cf1cf.firebaseapp.com",
  projectId: "convene-cf1cf",
  storageBucket: "convene-cf1cf.appspot.com",
  messagingSenderId: "255329262161",
  appId: "1:255329262161:web:d1c42e0bdb6c745e08b670",
  measurementId: "G-C60VSGJ2KR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
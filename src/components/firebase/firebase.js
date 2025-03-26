// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAddi2sen1tmA70YgxxPZlKVGGFT3E-0g",
  authDomain: "tech-heim-ba458.firebaseapp.com",
  projectId: "tech-heim-ba458",
  storageBucket: "tech-heim-ba458.firebasestorage.app",
  messagingSenderId: "308003958345",
  appId: "1:308003958345:web:865e00643fdb75d2699998",
  measurementId: "G-5YL4CX4284"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, db, googleProvider};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVh2n5e2JAkaUYSeiXKjzAIc2gAO-1itw",
  authDomain: "tech-heim-e6591.firebaseapp.com",
  projectId: "tech-heim-e6591",
  storageBucket: "tech-heim-e6591.firebasestorage.app",
  messagingSenderId: "128101929527",
  appId: "1:128101929527:web:4094b892eff3ccb7b9e5b2",
  measurementId: "G-G9V9T1JB1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db};
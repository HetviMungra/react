// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDIiflG16w15ZCVvy5yyGkuQwq5dRS36xg",
  authDomain: "react-pr-4b82a.firebaseapp.com",
  projectId: "react-pr-4b82a",
  storageBucket: "react-pr-4b82a.appspot.com",
  messagingSenderId: "784347619519",
  appId: "1:784347619519:web:c1e7c5f57476f23af1a60a",
  measurementId: "G-T6YG49KKZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)


export {auth,db}
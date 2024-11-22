// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8YEVrIJBRQF8q9PTFkBpSTfvxWujfNAE",
  authDomain: "auth-5f46d.firebaseapp.com",
  projectId: "auth-5f46d",
  storageBucket: "auth-5f46d.firebasestorage.app",
  messagingSenderId: "83236520749",
  appId: "1:83236520749:web:f2d0a71f69f138330789a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};
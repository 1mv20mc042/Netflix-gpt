// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 import {getAuth}from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl3Nlb3Kw2yQvHki30WtNbUiIXnLhsiM8",
  authDomain: "gpt-3-8fab3.firebaseapp.com",
  projectId: "gpt-3-8fab3",
  storageBucket: "gpt-3-8fab3.firebasestorage.app",
  messagingSenderId: "975064053865",
  appId: "1:975064053865:web:c3ac72dc0871b2eb074af8",
  measurementId: "G-R784H7LPZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
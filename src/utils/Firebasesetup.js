// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdos28EOvfGZ1N4a9yl0oa09SfVafjmKM",
  authDomain: "infodeltasys-49a95.firebaseapp.com",
  projectId: "infodeltasys-49a95",
  storageBucket: "infodeltasys-49a95.firebasestorage.app",
  messagingSenderId: "771809223260",
  appId: "1:771809223260:web:f6a13ab9435b886d4efc99",
  measurementId: "G-7CBXQV0WR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
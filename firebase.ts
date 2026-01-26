// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// OBȚINE CONFIGURAȚIA DIN: Firebase Console > Project Settings > General > Your apps > Web app
const firebaseConfig = {
  apiKey: "AIzaSyBVQI6J-FyFeiNkGR5hSvi8mhZwAFT8N7w",
  authDomain: "testare-cybersec.firebaseapp.com",
  projectId: "testare-cybersec",
  storageBucket: "testare-cybersec.firebasestorage.app",
  messagingSenderId: "119161875718",
  appId: "1:119161875718:web:4bc9591a38aee8cb264287",
  measurementId: "G-6JTJRMZSZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
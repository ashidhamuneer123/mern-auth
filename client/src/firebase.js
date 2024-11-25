// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-a618b.firebaseapp.com",
  projectId: "mern-auth-a618b",
  storageBucket: "mern-auth-a618b.firebasestorage.app",
  messagingSenderId: "559100910658",
  appId: "1:559100910658:web:5ef324d0b8a77deb57a1db"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
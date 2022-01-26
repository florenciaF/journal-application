import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
 
 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSfjdjwtZ0SVYb__VIi6nHxuQR8-Yi1Ms",
    authDomain: "react-course-b84b3.firebaseapp.com",
    projectId: "react-course-b84b3",
    storageBucket: "react-course-b84b3.appspot.com",
    messagingSenderId: "218748980024",
    appId: "1:218748980024:web:2b3a691963a25fa2df8fcd"
};
 
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
 
const db = getFirestore();
  
const googleAuthProvider = new GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider,
    firebaseApp
}



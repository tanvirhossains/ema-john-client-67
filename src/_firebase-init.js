// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr54qkogOovkSKUHLL8wC2LWgNrXArbA0",
  authDomain: "ema-john-simple-e374f.firebaseapp.com",
  projectId: "ema-john-simple-e374f",
  storageBucket: "ema-john-simple-e374f.appspot.com",
  messagingSenderId: "1041121440268",
  appId: "1:1041121440268:web:6de6ee800fcecd0a093429"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth
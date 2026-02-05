import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// DO NOT SHARE ANYOTHERS
const firebaseConfig = {
  apiKey: "AIzaSyCKR3NaL4TpTSBaaNt-n1FvsTNinwK5iPc",
  authDomain: "auth-integration-875a1.firebaseapp.com",
  projectId: "auth-integration-875a1",
  storageBucket: "auth-integration-875a1.firebasestorage.app",
  messagingSenderId: "208963836505",
  appId: "1:208963836505:web:00841e25d5c633a89f2f48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
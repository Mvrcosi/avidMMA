// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6-dKkvhftsQIKgGnDfdOTTE5ICHRu8s8",
    authDomain: "avid---mma.firebaseapp.com",
    projectId: "avid---mma",
    storageBucket: "avid---mma.appspot.com",
    messagingSenderId: "371052447393",
    appId: "1:371052447393:web:f231a1d15085b8d5f412e0",
    measurementId: "G-72G7ZF7RTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
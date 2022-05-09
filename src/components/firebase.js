// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKZKJB0A97YRzEFPzwAu14zt48p-fS2So",
  authDomain: "my-dummy-project-4258c.firebaseapp.com",
  projectId: "my-dummy-project-4258c",
  storageBucket: "my-dummy-project-4258c.appspot.com",
  messagingSenderId: "413509258019",
  appId: "1:413509258019:web:24091ab3aa2d49cfefda96",
  measurementId: "G-PV3ZGP9MY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
  
export default db;
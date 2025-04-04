import firebase from "firebase/compat/app";
//auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// *******************************************
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// *******************************************


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_P72gG_vNSvNXRu8qQjI5E0umEwMSiMs",
  authDomain: "clone-2bc60.firebaseapp.com",
  projectId: "clone-2bc60",
  storageBucket: "clone-2bc60.firebasestorage.app",
  messagingSenderId: "960374677368",
  appId: "1:960374677368:web:e62786426941debfa9728d",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();


// *******************************************
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);

// export { db, auth };
// *******************************************

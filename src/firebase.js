import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyDHRKYx7LkSuNRllCGiayN5pQMvwa_-Yo8",
  authDomain: "dig-app-792ae.firebaseapp.com",
  databaseURL: "https://dig-app-792ae-default-rtdb.firebaseio.com",
  projectId: "dig-app-792ae",
  storageBucket: "dig-app-792ae.appspot.com",
  messagingSenderId: "226673700243",
  appId: "1:226673700243:web:9f37a3d2cb7837aa710c66",
  measurementId: "G-EHTPGPSLD3"
  
};

firebase.initializeApp(firebaseConfig);

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app);
export const database = getDatabase(app);
export const db = getFirestore(app);
export const firestore = firebase.firestore();

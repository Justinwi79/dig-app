import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getDatabase } from "firebase/database";



const firebaseConfig = {
  
};

const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = firebase.firestore();
export const db = getDatabase(app);

export { auth, firestore };

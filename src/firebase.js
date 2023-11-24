import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    
};

firebase.initializeApp(firebaseConfig);

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app);
export const database = getDatabase(app);
export const db = getFirestore(app);
export const firestore = firebase.firestore();

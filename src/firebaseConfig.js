// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3sjRQdC0SSwb860CUwRXBKwGlXkYFsJ0",
  authDomain: "awdfruitproject.firebaseapp.com",
  projectId: "awdfruitproject",
  storageBucket: "awdfruitproject.appspot.com",
  messagingSenderId: "711173803225",
  appId: "1:711173803225:web:08f83916a93a905d1342c8"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
 export const storage = getStorage(app);
 export const auth=getAuth(app)
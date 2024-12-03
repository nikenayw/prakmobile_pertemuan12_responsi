// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCrna4_FuM8yR3AZKocW3GNxVq7NXfYQ5Y",
  authDomain: "radiator-springs-e60b5.firebaseapp.com",
  projectId: "radiator-springs-e60b5",
  storageBucket: "radiator-springs-e60b5.firebasestorage.app",
  messagingSenderId: "810223746600",
  appId: "1:810223746600:web:d18565870dd128b238ff1d"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db  };
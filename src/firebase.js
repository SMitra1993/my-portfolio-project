import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyATFp6azAkX8gRvv4k0flJoSkJep1XvGIo",
  authDomain: "my-portfolio-dashboard-acf69.firebaseapp.com",
  projectId: "my-portfolio-dashboard-acf69",
  storageBucket: "my-portfolio-dashboard-acf69.appspot.com",
  messagingSenderId: "230294825939",
  appId: "1:230294825939:web:0d97668e049b02c3de9d26",
  measurementId: "G-Z5B16EC2J6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCb_FXACknPL0gON-27YdOPwCSlGjGfvd0",
  authDomain: "samvid-4b8f8.firebaseapp.com",
  projectId: "samvid-4b8f8",
  storageBucket: "samvid-4b8f8.firebasestorage.app",
  messagingSenderId: "716981171010",
  appId: "1:716981171010:web:f022e0a401072c738f8edb",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

// Google Authentication Provider
export const googleProvider = new GoogleAuthProvider();

export default app;
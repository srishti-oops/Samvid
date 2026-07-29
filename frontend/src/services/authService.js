import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import { auth, db } from "../firebase/firebase";

const googleProvider = new GoogleAuthProvider();

async function createUserDocument(user) {
  const userRef = doc(db, "users", user.uid);

  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    await setDoc(userRef, {
      uid: user.uid,

      email: user.email,

      displayName: "",

      photoURL: user.photoURL || "",

      createdAt: serverTimestamp(),
    });
  }
}

export async function signup(email, password) {
  const credential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await createUserDocument(credential.user);

  return credential;
}

export async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function loginWithGoogle() {
  const credential = await signInWithPopup(auth, googleProvider);

  await createUserDocument(credential.user);

  return credential;
}

export async function logout() {
  return signOut(auth);
}

export async function resetPassword(email) {
  return sendPasswordResetEmail(auth, email);
}
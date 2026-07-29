import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "../firebase/firebase";

export async function saveAnalysis(report) {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No authenticated user found.");
  }

  const analysesRef = collection(
    db,
    "users",
    user.uid,
    "analyses"
  );

  const docRef = await addDoc(analysesRef, {
    ...report,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}
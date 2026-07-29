import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "../firebase/firebase";

/**
 * Returns the logged in user's analyses collection.
 */
function getAnalysisCollection() {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User is not authenticated.");
  }

  return collection(db, "users", user.uid, "analyses");
}

/**
 * Save analysis after backend response.
 */
export async function saveAnalysis(result, metadata = {}) {
  const analyses = getAnalysisCollection();

  const document = {
      title:
          metadata.title ||
          metadata.filename ||
          "Untitled Agreement",

      filename:
          metadata.filename || "",

      // Old UI expects this
      fileName:
          metadata.filename || "",

      documentType:
          result.documentType || "Unknown",

      riskScore:
          Number(result.riskScore ?? 0),

      // Old UI uses overallRisk
      overallRisk:
          result.overallRisk ||
          result.riskLevel ||
          "Unknown",

      // Keep this for dashboard
      riskLevel:
          result.riskLevel ||
          result.overallRisk ||
          "Unknown",

      confidence:
          Number(result.confidence ?? 95),

      summary:
          result.summary || "",

      clauses:
          result.clauses || [],

      missingClauses:
          result.missingClauses || [],

      negotiationTips:
          result.negotiationTips ||
          result.recommendations ||
          [],

      recommendations:
          result.recommendations ||
          result.negotiationTips ||
          [],

      createdAt:
          serverTimestamp(),
  };
  const docRef = await addDoc(analyses, document);

  return docRef.id;
}

/**
 * Dashboard + History
 */
export async function getAllAnalyses() {
  const analyses = getAnalysisCollection();

  const q = query(
    analyses,
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

/**
 * Single Report
 */
export async function getAnalysis(id) {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User is not authenticated.");
  }

  const ref = doc(
    db,
    "users",
    user.uid,
    "analyses",
    id
  );

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}

/**
 * Delete Report
 */
export async function deleteAnalysis(id) {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User is not authenticated.");
  }

  const ref = doc(
    db,
    "users",
    user.uid,
    "analyses",
    id
  );

  await deleteDoc(ref);
}
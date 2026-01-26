import { collection, addDoc, getDocs, doc, deleteDoc, query, orderBy } from "firebase/firestore";
import { db, auth } from "../firebase";
import { CandidateResult } from "../types";

const RESULTS_COLLECTION = "quiz_results";

export const saveResultToFirebase = async (result: CandidateResult): Promise<void> => {
  try {
    await addDoc(collection(db, RESULTS_COLLECTION), {
      ...result,
      userId: auth.currentUser?.uid,
      timestamp: new Date()
    });
  } catch (error) {
    console.error("Error saving result:", error);
    throw error;
  }
};

export const getResultsFromFirebase = async (): Promise<CandidateResult[]> => {
  try {
    const q = query(collection(db, RESULTS_COLLECTION), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as CandidateResult));
  } catch (error) {
    console.error("Error getting results:", error);
    throw error;
  }
};

export const deleteResultFromFirebase = async (id: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, RESULTS_COLLECTION, id));
  } catch (error) {
    console.error("Error deleting result:", error);
    throw error;
  }
};
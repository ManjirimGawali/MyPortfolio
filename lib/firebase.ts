import { initializeApp, getApps } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  query,
  orderBy,
  Timestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
console.log("Firebase initialized");
console.log("Firestore DB:", db);
// Admin email for review management
export const ADMIN_EMAIL = "manjirigawali39@gmail.com";

// Review type
export interface Review {
  id: string;
  name: string;
  email: string;
  message: string;
  rating: number;
  date: string;
  createdAt: Timestamp;
}

// Reviews collection reference
const reviewsCollection = collection(db, "reviews");

// Add a new review
export async function addReview(review: Omit<Review, "id" | "createdAt">) {
  try {
    const docRef = await addDoc(reviewsCollection, {
      ...review,
      createdAt: Timestamp.now(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding review:", error);
    return { success: false, error };
  }
}

// Get all reviews
export async function getReviews(): Promise<Review[]> {
  try {
    const q = query(reviewsCollection, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Review[];
  } catch (error) {
    console.error("Error getting reviews:", error);
    return [];
  }
}

// Delete a review (admin only)
export async function deleteReview(reviewId: string) {
  try {
    await deleteDoc(doc(db, "reviews", reviewId));
    return { success: true };
  } catch (error) {
    console.error("Error deleting review:", error);
    return { success: false, error };
  }
}

// Update a review (admin only)
export async function updateReview(
  reviewId: string,
  data: Partial<Omit<Review, "id" | "createdAt">>
) {
  try {
    await updateDoc(doc(db, "reviews", reviewId), data);
    return { success: true };
  } catch (error) {
    console.error("Error updating review:", error);
    return { success: false, error };
  }
}

export { db };

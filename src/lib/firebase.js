import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-41d80.firebaseapp.com",
  projectId: "reactchat-41d80",
  storageBucket: "reactchat-41d80.appspot.com",
  messagingSenderId: "37997559643",
  appId: "1:37997559643:web:c61b2a3b1f7015fc1be47e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

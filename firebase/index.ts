import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnY4HOSi9NKs8nxQtpzi3X9_sTty_1QXk",
  authDomain: "engineering-overflow.firebaseapp.com",
  projectId: "engineering-overflow",
  storageBucket: "engineering-overflow.appspot.com",
  messagingSenderId: "245250656875",
  appId: "1:245250656875:web:8d033305d0d43c57003f2e",
};

// Initialize Firebase
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth();
export const db = getFirestore();
export default firebaseConfig;

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdgBklh64dL3YiTLRZomQA7ZWIRchzR_8",
  authDomain: "nextjs-2b888.firebaseapp.com",
  projectId: "nextjs-2b888",
  storageBucket: "nextjs-2b888.appspot.com",
  messagingSenderId: "1052151823182",
  appId: "1:1052151823182:web:e78cea1ffe31568f84fc1f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

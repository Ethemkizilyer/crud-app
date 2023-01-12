import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_APROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_ASTORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_AMESSAING_ID,
  appId: process.env.NEXT_PUBLIC_AAPP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIza...your_key_here...",
  authDomain: "se-star-main.firebaseapp.com",
  projectId: "se-star-main",
  storageBucket: "se-star-main.appspot.com",
  messagingSenderId: "xxxxxxxxxxx",
  appId: "1:xxxxxxxxxxx:web:xxxxxxxxxxxxxxxx",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-app-de454.firebaseapp.com",
  projectId: "react-chat-app-de454",
  storageBucket: "react-chat-app-de454.appspot.com",
  messagingSenderId: "715311217976",
  appId: "1:715311217976:web:f158016fd2a15c15f795cd",
  measurementId: "G-TDZVNZFJB3"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
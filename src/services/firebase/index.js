import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCl9_xtsQ9Kh8DErDaaKpLId9xCMtSWIgc",
  authDomain: "ecommerce-senestrari.firebaseapp.com",
  projectId: "ecommerce-senestrari",
  storageBucket: "ecommerce-senestrari.appspot.com",
  messagingSenderId: "639935191726",
  appId: "1:639935191726:web:100a64fa38ab94bc89ab3f",
  measurementId: "G-JFZTF48DQW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestoreDb = getFirestore(app);


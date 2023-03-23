import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBK_ix5MUodJ58Ijf1Y3w7gvEqzB2XI2Jo",
  authDomain: "toursite-44305.firebaseapp.com",
  projectId: "toursite-44305",
  storageBucket: "toursite-44305.appspot.com",
  messagingSenderId: "343110337449",
  appId: "1:343110337449:web:c436428c0b6856d031bab8",
  measurementId: "G-TS7X7MM9DV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
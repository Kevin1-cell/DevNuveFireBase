// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZNw5NkkB1bgS4Qbkr_aJ6noxdYfXHucY",
  authDomain: "auth-app-7847c.firebaseapp.com",
  projectId: "auth-app-7847c",
  storageBucket: "auth-app-7847c.firebasestorage.app",
  messagingSenderId: "917493837749",
  appId: "1:917493837749:web:af0fc121664bd0f2b3b3fc",
  measurementId: "G-122ZTED0C9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

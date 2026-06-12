import { getStorage } from "firebase/storage";

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACA0c_iDoJaTPAILpuGwqAosbIEAax0xM",
  authDomain: "hometown-hub-c3dee.firebaseapp.com",
  projectId: "hometown-hub-c3dee",
  storageBucket: "hometown-hub-c3dee.firebasestorage.app",
  messagingSenderId: "472809084820",
  appId: "1:472809084820:web:b5b5ee33792ad4e4616181",
  measurementId: "G-879B878JPR"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
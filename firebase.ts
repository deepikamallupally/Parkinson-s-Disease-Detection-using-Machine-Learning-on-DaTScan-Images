import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB1UkNz-Z_yc0KBWeyND71PPM0hD-fIjNU",
  authDomain: "login-73c33.firebaseapp.com",
  projectId: "login-73c33",
  storageBucket: "login-73c33.firebasestorage.app",
  messagingSenderId: "1000639210724",
  appId: "1:1000639210724:web:8177b8d74f7b49cfbf78f1"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
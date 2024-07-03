// trong cái file này thi cấu hình với firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_KEY_FIREBASE,  
  authDomain: "quynh-cec5c.firebaseapp.com",
  projectId: "quynh-cec5c",
  storageBucket: "quynh-cec5c.appspot.com",
  messagingSenderId: "282785934909",
  appId: "1:282785934909:web:ae65890878d90c47904454"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
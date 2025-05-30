// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyAVxtiKT4wEtngzN0eZZqfPpYLjCU5dVNo",
  authDomain: "asset-panda-21403.firebaseapp.com",
  projectId: "asset-panda-21403",
  storageBucket: "asset-panda-21403.firebasestorage.app",
  messagingSenderId: "405828921198",
  appId: "1:405828921198:web:1c379f1b93645c25ef837f"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

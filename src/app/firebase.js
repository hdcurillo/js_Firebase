// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD31dJAEsmCjrc_E4ewxgH_dnrwfejAYmc",
  authDomain: "js-fire-8ca15.firebaseapp.com",
  projectId: "js-fire-8ca15",
  storageBucket: "js-fire-8ca15.appspot.com",
  messagingSenderId: "143521842071",
  appId: "1:143521842071:web:dd06136eac6bf5ab97bad2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);

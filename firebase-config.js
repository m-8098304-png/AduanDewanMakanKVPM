// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7tjIkgpl40qXGCN2tze9ToR8HAsjD_1g",
  authDomain: "aduandewanmakankvpm.firebaseapp.com",
  projectId: "aduandewanmakankvpm",
  storageBucket: "aduandewanmakankvpm.firebasestorage.app",
  messagingSenderId: "928243856578",
  appId: "1:928243856578:web:6882575eb97d41eeb2775b",
  measurementId: "G-BRDBE4N4S6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Get Firestore instance

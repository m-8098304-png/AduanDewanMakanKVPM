// Firebase configuration and initialization for CDN
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
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics(app);
const db = firebase.firestore(app);  // For Firestore

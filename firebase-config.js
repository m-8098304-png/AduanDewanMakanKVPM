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


// Reference to Firestore "complaints" collection
const complaintsRef = db.collection("complaints");

// Listen for form submission
document.getElementById("complaintForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  // Get the form data
  const name = document.getElementById("name").value;
  const mealType = document.getElementById("mealType").value;
  const message = document.getElementById("message").value;

  // Add the data to Firestore
  try {
    await complaintsRef.add({
      name: name,
      mealType: mealType,
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()  // Timestamp for sorting
    });
    alert("Complaint submitted successfully!");
    document.getElementById("complaintForm").reset();
  } catch (e) {
    alert("Error submitting complaint: " + e.message);
  }
});

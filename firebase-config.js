import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDGYEAGH9PTK6vKDlycdPR2APJvPDZPRdk",
    authDomain: "fir-demo-400fc.firebaseapp.com",
    projectId: "fir-demo-400fc",
    storageBucket: "fir-demo-400fc.firebasestorage.app",
    messagingSenderId: "389816442939",
    appId: "1:389816442939:web:14ad3a26d8fd8f781f7c1e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
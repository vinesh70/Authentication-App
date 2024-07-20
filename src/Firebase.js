// Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8MGuX2KkuUC23leOCX3OG-V4WllHgAkA",
  authDomain: "auth-app-24-9c772.firebaseapp.com",
  projectId: "auth-app-24-9c772",
  storageBucket: "auth-app-24-9c772.appspot.com",
  messagingSenderId: "774284309972",
  appId: "1:774284309972:web:a429a43b246c99e41a9241"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };

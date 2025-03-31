// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvXLepeJv_c1LXiG1czIsc2ODVHWQLxDY",
  authDomain: "simple-authentication-b25a5.firebaseapp.com",
  projectId: "simple-authentication-b25a5",
  storageBucket: "simple-authentication-b25a5.firebasestorage.app",
  messagingSenderId: "1051537626932",
  appId: "1:1051537626932:web:5bd932d14f0bd15c6ef761"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
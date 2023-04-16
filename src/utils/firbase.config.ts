// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBuYJ_J6a45bRtlz_-HP2lcCbHIw2jpInY",
	authDomain: "twitch-panel.firebaseapp.com",
	projectId: "twitch-panel",
	storageBucket: "twitch-panel.appspot.com",
	messagingSenderId: "228823643631",
	appId: "1:228823643631:web:221de6509a12693d6a721a",
	measurementId: "G-XDV4TXT8EV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { app, db, auth };

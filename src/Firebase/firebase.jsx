
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDENM8_h2vGeaOEl4a0cVPKeLDbvn_Drm0",
  authDomain: "medicare-86eb0.firebaseapp.com",
  projectId: "medicare-86eb0",
  storageBucket: "medicare-86eb0.appspot.com",
  messagingSenderId: "243682792306",
  appId: "1:243682792306:web:a72c7d485186bdaa7383eb",
  measurementId: "G-SH78STGDCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database =getAuth(app)

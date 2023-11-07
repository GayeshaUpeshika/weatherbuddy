import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDI4mo-TCjZkBmB0fezmJfMlAr5RXXsupE",
  authDomain: "weather-8f8ed.firebaseapp.com",
  projectId: "weather-8f8ed",
  storageBucket: "weather-8f8ed.appspot.com",
  messagingSenderId: "983470808844",
  appId: "1:983470808844:web:bd409f2afd7b2cce43f329"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };

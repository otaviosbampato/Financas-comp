import { initializeApp } from "firebase/app"
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBLWnnxce5vwDoFjKm136TgPh-R7oglSk4",
  authDomain: "login-financas.firebaseapp.com",
  projectId: "login-financas",
  storageBucket: "login-financas.appspot.com",
  messagingSenderId: "470406445742",
  appId: "1:470406445742:web:9bbe93523cddaa1dfe8b3f"
};

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
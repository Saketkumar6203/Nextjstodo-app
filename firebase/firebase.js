

import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCCwblYtGOv0gZHDN5gVf5S8psU8rOLk-k",
  authDomain: "fir-todo-app-7b89b.firebaseapp.com",
  projectId: "fir-todo-app-7b89b",
  storageBucket: "fir-todo-app-7b89b.appspot.com",
  messagingSenderId: "535852778324",
  appId: "1:535852778324:web:d6604673ceef0925fcfec1"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


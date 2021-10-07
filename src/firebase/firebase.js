import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

firebase.initializeApp({
  apiKey: "AIzaSyCZ-JeDFcRmF3ttRCEgPfQLoN3_ICejxmM",
  authDomain: "todo-app-e5fe0.firebaseapp.com",
  projectId: "todo-app-e5fe0",
  storageBucket: "todo-app-e5fe0.appspot.com",
  messagingSenderId: "289586472002",
  appId: "1:289586472002:web:4a69e9d9ad5ebd05a079db"
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();

export default firebase;

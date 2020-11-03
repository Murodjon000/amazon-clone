import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCGO-YHjkqS4bMGY0Y3KlY8zsseqH9whRU",
  authDomain: "clone-4c3b9.firebaseapp.com",
  databaseURL: "https://clone-4c3b9.firebaseio.com",
  projectId: "clone-4c3b9",
  storageBucket: "clone-4c3b9.appspot.com",
  messagingSenderId: "377195352431",
  appId: "1:377195352431:web:c32bb2a8178c41a637589a",
  measurementId: "G-6E92N42XM5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

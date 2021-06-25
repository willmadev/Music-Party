import firebase from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCfySRLlIZfaOI_OmcfLIbP7IoNfCqwjBo",
  authDomain: "musicpartyapp.firebaseapp.com",
  projectId: "musicpartyapp",
  storageBucket: "musicpartyapp.appspot.com",
  messagingSenderId: "1041351384788",
  appId: "1:1041351384788:web:07f5ee8a017598bb2de541",
  measurementId: "G-XGYEGLPQWS",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };

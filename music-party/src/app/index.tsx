import React, { FC } from "react";
import ReactDom from "react-dom";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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

const App: FC = () => {
  return <h1>Music Party</h1>;
};

const render = () => {
  ReactDom.render(<App />, document.getElementById("root"));
};

render();

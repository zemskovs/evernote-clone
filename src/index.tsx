import * as React from 'react';
import * as ReactDOM from "react-dom";
import * as firebase from 'firebase';

import App from './App';
import "./styles.css";
import "./styles.scss";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import firebase from "firebase";
require("firebase/firestore");

const firebaseConfig = {

};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

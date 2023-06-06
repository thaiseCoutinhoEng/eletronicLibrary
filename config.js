import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyA-7yv7sJlYXxxmO8N_O-M2fbps6K5Xq0w",
    authDomain: "bibliotecaeletronica-d3edf.firebaseapp.com",
    databaseURL: "https://bibliotecaeletronica-d3edf-default-rtdb.firebaseio.com",
    projectId: "bibliotecaeletronica-d3edf",
    storageBucket: "bibliotecaeletronica-d3edf.appspot.com",
    messagingSenderId: "954994093568",
    appId: "1:954994093568:web:7763878c3b702aeba7f2e5"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
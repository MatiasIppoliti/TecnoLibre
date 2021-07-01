import firebase from "firebase/app";
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBkHAr9clJiP2ex1zwk1uSGYI2oR5Zlkzs",
    authDomain: "tecnolibre-76dcb.firebaseapp.com",
    projectId: "tecnolibre-76dcb",
    storageBucket: "tecnolibre-76dcb.appspot.com",
    messagingSenderId: "583898918203",
    appId: "1:583898918203:web:03c6680ff10c2e30765b1e",
    measurementId: "G-QGLL22E447"
};

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore();
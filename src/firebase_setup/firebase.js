import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const config = {
    apiKey: "AIzaSyDf1RnTrDUrkjl7GKWpTVc1IEQx1xM2Sl0",
    authDomain: "cosmiccalendarapp.firebaseapp.com",
    projectId: "cosmiccalendarapp",
    storageBucket: "cosmiccalendarapp.appspot.com",
    messagingSenderId: "26593760793",
    appId: "1:26593760793:web:2571fc79ad5440a98d7c88",
    measurementId: "G-9FH0JX14NL",
  };

const app = initializeApp(config);
const db = getFirestore(app);

export { app, db }
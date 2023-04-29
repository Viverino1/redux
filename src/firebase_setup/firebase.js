import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs, setDoc } from 'firebase/firestore/lite';

const config = {
    apiKey: "AIzaSyDf1RnTrDUrkjl7GKWpTVc1IEQx1xM2Sl0",
    authDomain: "cosmiccalendarapp.firebaseapp.com",
    projectId: "cosmiccalendarapp",
    storageBucket: "cosmiccalendarapp.appspot.com",
    messagingSenderId: "26593760793",
    appId: "1:26593760793:web:2571fc79ad5440a98d7c88",
    measurementId: "G-9FH0JX14NL",

    CLIENT_ID: '26593760793-7ok4mtohus6thk1nijs56iqmn5n6kllt.apps.googleusercontent.com',
    DISCOVERY_DOC: 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
    SCOPES: 'https://www.googleapis.com/auth/calendar',
  };

const app = initializeApp(config);
const db = getFirestore(app);
const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/calendar");

const handleAuthClick = () => {
    signInWithPopup(auth, provider).then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
    }).catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    })
}

const handleSignoutClick = () => {
    auth.signOut();
}

onAuthStateChanged(auth, user => {
    if(user){
        var gapiScript = document.createElement("script");
        gapiScript.type="text/javascript";
        gapiScript.src="https://apis.google.com/js/client.js"

        gapiScript.onload = () => {
            window.gapi.load('client', () => {
                console.log("")
            })
        }

        document.getElementsByTagName('head')[0].appendChild(gapiScript);   
    }
})

export { auth, app, db, handleAuthClick, handleSignoutClick }
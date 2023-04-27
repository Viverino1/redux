import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import "firebaseui/dist/firebaseui.css";
import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId,
};

firebase.initializeApp(firebaseConfig);
const auth = getAuth(firebase.app());
const db = firebase.firestore;

var provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/calendar');

const handleAuthClick = () => {
    signInWithPopup(auth, provider)
    .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        
        const user = result.user;
    }).catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
    })
}

const handleSignoutClick = () => {
    auth.signOut();
}

async function listUpcomingEvents() {
    let response;
    try {
        const request = {
            'calendarId': 'primary',
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 10,
            'orderBy': 'startTime',
        };
        response = await window.gapi.client.calendar.events.list(request);
    } catch (err) {
        console.log(err)
        return;
    }

    const events = response.result.items;
    if (!events || events.length == 0) {
        console.log("No events found.");
        return;
    }
    // Flatten to string to display
    console.log(events);
}

export { db, auth, handleAuthClick, handleSignoutClick };
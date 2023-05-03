import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { doc, setDoc, getDoc } from "firebase/firestore";

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
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

function userRef(){
    return doc(db, 'users', auth.currentUser.uid);
}

function handleAuthClick(){
    signInWithPopup(auth, provider)
    .then(() => {
        setDoc(userRef(), {name: auth.currentUser.displayName}, {merge: true}).then(() => {
            getDoc(userRef()).then(result => {
                const data = result.data();
                if(!data.eventIDCounter){
                    setDoc(userRef(), {eventIDCounter: 0}, {merge: true})
                }
            })
        })
    })
    .catch(error => console.log(error));
}

function addEvent({title, start, length, rigid}){
    getDoc(userRef())
    .then(result => {
        const eventID = result.data().eventIDCounter + 1;
        const eventRef = doc(db, 'users', auth.currentUser.uid, 'events', "event" + eventID)

        setDoc(eventRef, {
            title: title,
            start: start,
            length: length,
            rigid: rigid,
        }).then(() => {
            setDoc(userRef(), {eventIDCounter: eventID}, {merge: true})
        })
    })
}

function readEvent(id){
    getDoc(doc(db, 'users', auth.currentUser.uid)).then(result => console.log(result))
}

function handleSignoutClick(){
    auth.signOut();
}

export { app, db, auth, handleAuthClick, handleSignoutClick, addEvent, readEvent }
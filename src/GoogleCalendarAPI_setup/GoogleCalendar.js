import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../firebase_setup/firebase";
import { useDispatch } from "react-redux";

const CLIENT_ID = '216466308050-ing0f2pgdst6qpnklr531i71m5k2fegb.apps.googleusercontent.com';
const API_KEY = 'AIzaSyC88Z_DM8xk21A6wTZo1m_GqnvJoPj8Ooo';
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
const SCOPES = 'https://www.googleapis.com/auth/calendar';

let tokenClient;
let gapiInited = false;
let gisInited = false;

var gapiScript = document.createElement("script");
gapiScript.type = "text/javascript";
gapiScript.src = "https://apis.google.com/js/api.js";
gapiScript.onload = function() {
    gapiLoaded();
}
document.getElementsByTagName("head")[0].appendChild(gapiScript);

var gScript = document.createElement("script");
gScript.type = "text/javascript";
gScript.src = "https://accounts.google.com/gsi/client";
gScript.onload = function() {
    gisLoaded()
}
document.getElementsByTagName("head")[0].appendChild(gScript);

function gapiLoaded() {
    window.gapi.load('client', initializeGapiClient);
}

async function initializeGapiClient() {
    await window.gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
    });
    gapiInited = true;
    maybeEnableButtons();
}

function gisLoaded() {
    tokenClient = window.google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '', // defined later
    });
    gisInited = true;
    maybeEnableButtons();
}

function maybeEnableButtons() {
    if (gapiInited && gisInited) {
        console.log("ready to log in")
    }
}

function handleAuthClick() {
    tokenClient.callback = async (resp) => {
        if (resp.error !== undefined) {
            throw (resp);
        }
        await listUpcomingEvents();
    };

    if (window.gapi.client.getToken() === null) {
        tokenClient.requestAccessToken({prompt: 'consent'});
        
    } else {
        tokenClient.requestAccessToken({prompt: ''});
    }
}

function handleSignoutClick() {
    const token = window.gapi.client.getToken();
    if (token !== null) {
        window.google.accounts.oauth2.revoke(token.access_token);
        window.gapi.client.setToken('');
    }
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

export { }
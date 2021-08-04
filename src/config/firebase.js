import firebase from 'firebase/app';
import 'firebase/auth';

/* const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
}; */

const config = {
    apiKey: "AIzaSyCs1OILUkkUBIKpbu6nU-IAw1VpIqqu-qQ",
    authDomain: "simple-store-test.firebaseapp.com",
    projectId: "simple-store-test",
    storageBucket: "simple-store-test.appspot.com",
    messagingSenderId: "795749183032",
    appId: "1:795749183032:web:a49833af0ebb70468b00cd",
    measurementId: "G-PYHLKMF79M"
}

firebase.initializeApp(config);

export default firebase;
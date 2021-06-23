import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFzkRtXrrT7yoooJrG8JySKZcQE2ZAl6s",
    authDomain: "rookas-robinhood-app.firebaseapp.com",
    projectId: "rookas-robinhood-app",
    storageBucket: "rookas-robinhood-app.appspot.com",
    messagingSenderId: "894138710753",
    appId: "1:894138710753:web:7d9a8e896f881926cd95a0",
    measurementId: "G-PB59274XL7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export {db};
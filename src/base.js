import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB7Hg56-JIXwOwuqzSkswXCMlV_t32OrSs",
  authDomain: "cr-clanalyzer.firebaseapp.com",
  databaseURL: "https://cr-clanalyzer.firebaseio.com",
  projectId: "cr-clanalyzer",
  storageBucket: "",
  messagingSenderId: "739504800775",
  appId: "1:739504800775:web:e02ff94ebbc396146596a2",
  measurementId: "G-PZKKMHRPNP"
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp } // named export, use brackets to import elsewhere

export default base // default export, no need for curly brackets










/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.1.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.1.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA1Hzf-_bcXdT3V4VdOc4EDaH6qaKd4kqM",
    authDomain: "catch-of-the-day-1193.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-1193.firebaseio.com",
    projectId: "catch-of-the-day-1193",
    storageBucket: "catch-of-the-day-1193.appspot.com",
    messagingSenderId: "624794239624",
    appId: "1:624794239624:web:a9b7adf7c902794768d53d",
    measurementId: "G-59JWXN28J9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
*/
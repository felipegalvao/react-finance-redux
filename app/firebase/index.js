import firebase from "firebase";

// Initialize Firebase
try {
  const config = {
    apiKey: "AIzaSyBSFR9_lEHPM9-MkkJVN0ZXLeH7Cp29xmI",
    authDomain: "react-finance-redux-7b646.firebaseapp.com",
    databaseURL: "https://react-finance-redux-7b646.firebaseio.com",
    storageBucket: "react-finance-redux-7b646.appspot.com",
    messagingSenderId: "344359769731"
  };
  firebase.initializeApp(config);
} catch (e) {}

export const githubProvider = new firebase.auth.GithubAuthProvider();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default firebase;

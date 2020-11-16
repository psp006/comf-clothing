import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD5L09PPklqEkQYY4Sx9_RAT1mxs-HYK6k",
  authDomain: "comf-db.firebaseapp.com",
  databaseURL: "https://comf-db.firebaseio.com",
  projectId: "comf-db",
  storageBucket: "comf-db.appspot.com",
  messagingSenderId: "756286194700",
  appId: "1:756286194700:web:59a76ef7efb6b6eeae1a29",
  measurementId: "G-TNEV3HR0LR"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
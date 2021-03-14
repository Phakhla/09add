import firebase from "firebase/app";
import "firebase/firestore"

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyDK8HuHsfsin6gM-Iq_ptcqtIDuTZNFa_I",
    authDomain: "add-b2545.firebaseapp.com",
    projectId: "add-b2545",
    storageBucket: "add-b2545.appspot.com",
    messagingSenderId: "548270350864",
    appId: "1:548270350864:web:d89497c7be2d5ec383e095"
  };
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC_tgOWh2hcaj-nCEM_Mzg26kT9k92I3ys",
    authDomain: "horizon-eeb53.firebaseapp.com",
    databaseURL: "https://horizon-eeb53-default-rtdb.firebaseio.com",
    projectId: "horizon-eeb53",
    storageBucket: "horizon-eeb53.appspot.com",
    messagingSenderId: "420897626070",
    appId: "1:420897626070:web:747f82f423d811e0567677"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();
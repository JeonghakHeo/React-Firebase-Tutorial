// npm install firebase
// importing just base features from firebase library by adding /app
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
  apiKey: "AIzaSyBiOzcREFKfwEpnSlZfujbLKIs4kLRUHzI",
  authDomain: "net-ninja-marioplan-6c444.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-6c444.firebaseio.com",
  projectId: "net-ninja-marioplan-6c444",
  storageBucket: "net-ninja-marioplan-6c444.appspot.com",
  messagingSenderId: "483252353244",
  appId: "1:483252353244:web:e3fc6aa6927da072955c19"
};

firebase.initalizeApp(config);
firebase.firestore().settings({ timestmpsInSnapshots: true })

export default firebase;

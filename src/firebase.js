import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBT3p3C9871bJZxwy0Dc3Z5zfaWAXuUb1c",
  authDomain: "golden-quiz-70fe9.firebaseapp.com",
  databaseURL: "https://golden-quiz-70fe9.firebaseio.com",
  projectId: "golden-quiz-70fe9",
  storageBucket: "golden-quiz-70fe9.appspot.com",
  messagingSenderId: "1003962126310",
  appId: "1:1003962126310:web:f68cdb1221316075acd027",
  measurementId: "G-VNSYBQL5ZS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAoPR6Als588i-_Lax3lYNl-8MJ4beDcyw",
  authDomain: "twitter-clone-81e74.firebaseapp.com",
  projectId: "twitter-clone-81e74",
  storageBucket: "twitter-clone-81e74.appspot.com",
  messagingSenderId: "990782944460",
  appId: "1:990782944460:web:b34b96389f3287e6cf3e69",
  measurementId: "G-V55C742TN4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db;
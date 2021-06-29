import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDdBbdncWaII8P4sfYcuxAMnsncbVz1qxc",
    authDomain: "chatnext-8cd29.firebaseapp.com",
    projectId: "chatnext-8cd29",
    storageBucket: "chatnext-8cd29.appspot.com",
    messagingSenderId: "180947476777",
    appId: "1:180947476777:web:ccfc4a392a02c317205738"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };
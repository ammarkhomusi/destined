// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX6zt977_PUgFyahFP4BHYRPpMHiqxWo8",
  authDomain: "destined-auth.firebaseapp.com",
  projectId: "destined-auth",
  storageBucket: "destined-auth.appspot.com",
  messagingSenderId: "457199389335",
  appId: "1:457199389335:web:f551ff15a1abb1c167f7d2",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };

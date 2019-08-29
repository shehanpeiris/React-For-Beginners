import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAnLu28M3WrmC3u19i1OD-avStoJ09u4Pk",
  authDomain: "catch-of-the-day-shehan-peiris.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-shehan-peiris.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp }

// This is a default export
export default base;
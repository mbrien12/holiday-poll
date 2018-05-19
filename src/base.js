import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: "https://holiday-poll.firebaseio.com",  
})

const base = Rebase.createClass(firebaseApp.database());

// Named export
export { firebaseApp }

// Default export and Google auth
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default base
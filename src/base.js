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

// Default export
export default base
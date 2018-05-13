import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBmaahhewd5t0HXWVZiNBtDH9vlXG8UBnM",
  authDomain: "holiday-poll.firebaseapp.com",
  databaseURL: "https://holiday-poll.firebaseio.com",  
})

const base = Rebase.createClass(firebaseApp.database());

// Named export
export { firebaseApp }

// Default export
export default base
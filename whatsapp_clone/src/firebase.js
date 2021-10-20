import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDd0AF433ZFneVRSWwC7aFxVAA9RmLPmms",
    authDomain: "whatsapp-clone-b4ad5.firebaseapp.com",
    projectId: "whatsapp-clone-b4ad5",
    storageBucket: "whatsapp-clone-b4ad5.appspot.com",
    messagingSenderId: "1088290711266",
    appId: "1:1088290711266:web:407686cc342ed3c6dda0bb"
  };
// Connects everything
const firebaseApp = firebase.initializeApp(firebaseConfig);
// database connection
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth,provider};
export default db;
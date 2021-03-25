import firebase from "firebase";

const firebaseConfig = {}; // copy your own json file and paste it here.

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db , auth}
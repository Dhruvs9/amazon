import firebase from "firebase";
// import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDcOlCgXZC9vfkQcWb5ZDhnGub155OSjgA",
    authDomain: "fir-a8a83.firebaseapp.com",
    databaseURL: "https://fir-a8a83.firebaseio.com",
    projectId: "fir-a8a83",
    storageBucket: "fir-a8a83.appspot.com",
    messagingSenderId: "640818925081",
    appId: "1:640818925081:web:3a55f37603a4a788bf6488",
    measurementId: "G-3JWPXJ15BQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  // export const storage =  getStorage(app);

  export {db, auth };
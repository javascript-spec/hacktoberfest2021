import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYkwdxPWIGEHx4gV7v2T49GB6qkM3j6YQ",
  authDomain: "whatsapp-clone-c0709.firebaseapp.com",
  projectId: "whatsapp-clone-c0709",
  storageBucket: "whatsapp-clone-c0709.appspot.com",
  messagingSenderId: "638443447176",
  appId: "1:638443447176:web:c6c92209af69746a34103d",
  measurementId: "G-N74PPDW2PW"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;

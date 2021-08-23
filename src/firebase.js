// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyDTFqHWlEgjDgsq_6CoUY6floGVLbM-Rog",
  authDomain: "clone-a66ca.firebaseapp.com",
  projectId: "clone-a66ca",
  storageBucket: "clone-a66ca.appspot.com",
  messagingSenderId: "215056136214",
  appId: "1:215056136214:web:b7363930a58981416f9d37",
  measurementId: "G-KL50JN9BG4"
};

const firebaseAapp = firebase.initializeApp(firebaseConfig);

const db = firebaseAapp.firestore();
const auth = firebase.auth();  

export { db, auth};
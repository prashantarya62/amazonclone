
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCVwYzY5fdxIbAlSXsFIU2PE4OawqPAe5o",
  authDomain: "clone-1d4af.firebaseapp.com",
  databaseURL: "https://clone-1d4af-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "clone-1d4af",
  storageBucket: "clone-1d4af.appspot.com",
  messagingSenderId: "320373300177",
  appId: "1:320373300177:web:f9c6423a173567e4c91ef0",
  measurementId: "G-LEJ1SHBH16"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
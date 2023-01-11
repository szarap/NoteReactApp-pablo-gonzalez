// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZpRnJWki0c71WNwTJxZgXi0HLxYSpvKQ",
  authDomain: "note-react-app-d10ba.firebaseapp.com",
  projectId: "note-react-app-d10ba",
  storageBucket: "note-react-app-d10ba.appspot.com",
  messagingSenderId: "262622697904",
  appId: "1:262622697904:web:8de00a108bcca77a469e75",
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp);
export const FirebaseDB   = getFirestore ( FirebaseApp );


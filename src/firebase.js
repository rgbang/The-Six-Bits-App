import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsc4auYeagT-J9TPZn9FoHEUF9QRndtyM",
  authDomain: "thestore-49a0b.firebaseapp.com",
  databaseURL: "https://thestore-49a0b-default-rtdb.firebaseio.com",
  projectId: "thestore-49a0b",
  storageBucket: "thestore-49a0b.appspot.com",
  messagingSenderId: "393539839413",
  appId: "1:393539839413:web:7620a3ef3b1927983225fc",
  measurementId: "G-VYBLYLM530"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBzrbIblyAFUQRKIFIzYqRPfjCNZRbYCpo",
  authDomain: "b-sportwear-shop.firebaseapp.com",
  projectId: "b-sportwear-shop",
  storageBucket: "b-sportwear-shop.appspot.com",
  messagingSenderId: "852156358107",
  appId: "1:852156358107:web:f2496a4d4c44932bb25bfe",
  measurementId: "G-PR95NG6NW6",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const database = firebase.database();
export const storage = firebase.storage();
//storageRef = storage.ref()

export const analytics = firebase.analytics();
export const authFirebase = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;

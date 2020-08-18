import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAGBvrAFnLAIsQyu273oAGSWuPCp8UnhlI",
  authDomain: "goodcle-d9f15.firebaseapp.com",
  databaseURL: "https://goodcle-d9f15.firebaseio.com",
  projectId: "goodcle-d9f15",
  storageBucket: "goodcle-d9f15.appspot.com",
  messagingSenderId: "95844022727",
  appId: "1:95844022727:web:80eed4681f16e01610c1e2",
  measurementId: "G-X0SBDWMC69",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export default firebase;

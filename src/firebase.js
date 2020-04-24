import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDJIIisw1loStTbpPLmRZc9tkUVc-3VYHc",
  authDomain: "athtest-eda82.firebaseapp.com",
  databaseURL: "https://athtest-eda82.firebaseio.com",
  projectId: "athtest-eda82",
  storageBucket: "athtest-eda82.appspot.com",
  messagingSenderId: "503428685205",
  appId: "1:503428685205:web:80a214d7647fe45d8eaa9c",
  measurementId: "G-ED02WY82JM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;

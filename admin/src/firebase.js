import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAx_4_n6zEd35CxTheXlaTBuGKueSOZM-Q",
  authDomain: "netflix-c00cc.firebaseapp.com",
  projectId: "netflix-c00cc",
  storageBucket: "netflix-c00cc.appspot.com",
  messagingSenderId: "1043124783553",
  appId: "1:1043124783553:web:7046475b63e6371e944740",
  measurementId: "G-7DC5DFH4NE",
};


firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;

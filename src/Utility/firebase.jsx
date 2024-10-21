
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS98UL7ngQpof3sd42cnrojQHwvIMVl_o",
  authDomain: "fir-c00f2.firebaseapp.com",
  projectId: "fir-c00f2",
  storageBucket: "fir-c00f2.appspot.com",
  messagingSenderId: "839765823550",
  appId: "1:839765823550:web:126912dfbeacca89fe016f"
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=app.firestore()
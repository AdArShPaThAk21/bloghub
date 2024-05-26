import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6Y0Hgn_8mrdM4spGhcBA3XAdeuwQuvF4",
  authDomain: "fee2-f087e.firebaseapp.com",
  projectId: "fee2-f087e",
  storageBucket: "fee2-f087e.appspot.com",
  messagingSenderId: "818458396211",
  appId: "1:818458396211:web:1996fa7c9e62a876674546",
  measurementId: "G-9V01PTXK6Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

import { getApp, getApps} from "@firebase/app";
import {initializeApp} from "firebase/app";
import {getAuth } from "firebase/auth"
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyA0z9N2y06xbZTD7NC1YwTy-54SOXt4Ws4",
    authDomain: "messaging-9b844.firebaseapp.com",
    databaseURL: "https://messaging-9b844-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "messaging-9b844",
    storageBucket: "messaging-9b844.firebasestorage.app",
    messagingSenderId: "965519121186",
    appId: "1:965519121186:web:f9a1bd3ff1dfed5282e37b",
    measurementId: "G-73RHRV37N9"
};

const app= !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth= getAuth(app);
const db=getFirestore(app)
export {app, auth,db};


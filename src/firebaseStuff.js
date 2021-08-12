import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBF3y1IC9EyReJoZeP3_Gb3Tt89jWvpV5Q",
    authDomain: "shoppingpal-1d6e2.firebaseapp.com",
    projectId: "shoppingpal-1d6e2",
    storageBucket: "shoppingpal-1d6e2.appspot.com",
    messagingSenderId: "243703662163",
    appId: "1:243703662163:web:8e580650ec23d3ead668a6",
    measurementId: "G-97VXQ5WXQ3"
  };
  export const FirebaseApp = initializeApp(firebaseConfig)
  export const Database = getFirestore()
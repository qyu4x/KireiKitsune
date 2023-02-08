
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDFvxNihm0dWopooqQ_WnAFQrrsp6QHwxs",
    authDomain: "react-books-8c91f.firebaseapp.com",
    databaseURL: "https://react-books-8c91f-default-rtdb.firebaseio.com",
    projectId: "react-books-8c91f",
    storageBucket: "react-books-8c91f.appspot.com",
    messagingSenderId: "76322332734",
    appId: "1:76322332734:web:aa876bfb4ad5f9fc2bf16f",
    measurementId: "G-VXT7G2YSY5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getDatabase} from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7V8b7u6K4U6ZYoR5TYJwZxa2tZcOsAJ0",
  authDomain: "storefront-3a548.firebaseapp.com",
  databaseURL: "https://storefront-3a548-default-rtdb.firebaseio.com",
  projectId: "storefront-3a548",
  storageBucket: "storefront-3a548.appspot.com",
  messagingSenderId: "193077658233",
  appId: "1:193077658233:web:019d38cba206dce7444aa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
export {db}
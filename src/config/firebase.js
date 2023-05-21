import {  getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOQHgxygz820EX3qjrXizFVbEfp6OVqGs",
  authDomain: "tarup-9c6d2.firebaseapp.com",
  databaseURL: "https://tarup-9c6d2.firebaseio.com",
  projectId: "tarup-9c6d2",
  storageBucket: "tarup-9c6d2.appspot.com",
  messagingSenderId: "851832043001",
  appId: "1:851832043001:web:20bb67bd7748602c083928",
  measurementId: "G-594SFRT0X5"
};

// Initialize Firebaseconst
//const app = initializeApp(firebaseConfig)

// Initialize Firebase for SSR

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

// Initialize Firebase services
//const firestore = getFirestore(app)
const auth = getAuth(app)

// Expose the instances we'll need
export { app,  auth }
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS8c3MODpVrI_SQxW-lB2E-0cEQpD48is",
  authDomain: "warehouse-management-c9446.firebaseapp.com",
  projectId: "warehouse-management-c9446",
  storageBucket: "warehouse-management-c9446.appspot.com",
  messagingSenderId: "459037563592",
  appId: "1:459037563592:web:fc8bbc905ccc5c910c63fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
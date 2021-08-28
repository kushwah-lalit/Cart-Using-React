import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDUxgxjG9IKnX4tyFZKY7ZWnRgCqz08nN8",
  authDomain: "cart-6b92c.firebaseapp.com",
  projectId: "cart-6b92c",
  storageBucket: "cart-6b92c.appspot.com",
  messagingSenderId: "415332330240",
  appId: "1:415332330240:web:112faa255bc16779cfa1e5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

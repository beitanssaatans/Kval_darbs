import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';


var config = {
  apiKey: "AIzaSyBp31R-n1p758DOxhJwP0rGMurKUYx2QQA",
  authDomain: "tedx-f78cd.firebaseapp.com",
  databaseURL: "https://tedx-f78cd.firebaseio.com",
  projectId: "tedx-f78cd",
  storageBucket: "tedx-f78cd.appspot.com",
  messagingSenderId: "514921603417"
};
  firebase.initializeApp(config);

  ReactDOM.render(
      <App />,
      document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA






import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyBp31R-n1p758DOxhJwP0rGMurKUYx2QQA",
    authDomain: "tedx-f78cd.firebaseapp.com",
    databaseURL: "https://tedx-f78cd.firebaseio.com",
    projectId: "tedx-f78cd",
    storageBucket: "tedx-f78cd.appspot.com",
    messagingSenderId: "514921603417"
  };

firebase.initializeApp(config);
firebase.firestore();


const storage = firebase.storage();

export {
    storage, firebase as default
}
 
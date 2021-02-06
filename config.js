import * as firebase from 'firebase'
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCt7bN7VTObzEdBl4nruSwbQW1nbDdEu84",
  authDomain: "wily-app-2-a6b24.firebaseapp.com",
  databaseURL: "https://wily-app-2-a6b24.firebaseio.com",
  projectId: "wily-app-2-a6b24",
  storageBucket: "wily-app-2-a6b24.appspot.com",
  messagingSenderId: "192522345923",
  appId: "1:192522345923:web:fae97022f5dcc9097bf176",
  measurementId: "G-50J89H1B0V"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

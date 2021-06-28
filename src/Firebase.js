import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyBfsSoVpK5ixqaEwKjIIUYGaQpJcMbQOEQ",
    authDomain: "pankaj-react-a6329.firebaseapp.com",
    databaseURL: "https://pankaj-react-a6329-default-rtdb.firebaseio.com",
    projectId: "pankaj-react-a6329",
    storageBucket: "pankaj-react-a6329.appspot.com",
    messagingSenderId: "1055226678304",
    appId: "1:1055226678304:web:ec4410b7ddd53ecae74045"
  };
  firebase.initializeApp(firebaseConfig);

export default firebase;
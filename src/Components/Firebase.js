import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBNRdFRZ3I62WS89InOKI7nBgcQgvXRtL8",
  authDomain: "crud-application-eabe4.firebaseapp.com",
  projectId: "crud-application-eabe4",
  storageBucket: "crud-application-eabe4.appspot.com",
  messagingSenderId: "51820874462",
  appId: "1:51820874462:web:128d781e74fa1d9ce8904f"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
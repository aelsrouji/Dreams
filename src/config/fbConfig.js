import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
var fbConfig = {
    apiKey: "AIzaSyAbdeER-K7hV4M6M0smwLv4WiLUKAL6d6A",
    authDomain: "mydreams-a834c.firebaseapp.com",
    databaseURL: "https://mydreams-a834c.firebaseio.com",
    projectId: "mydreams-a834c",
    storageBucket: "mydreams-a834c.appspot.com",
    messagingSenderId: "394754991906",
    appId: "1:394754991906:web:5740f159355fee54"
  };
  // Initialize Firebase
  firebase.initializeApp(fbConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;
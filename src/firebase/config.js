
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBCVtYuVcpDkr1Qq08VwOS36-L8vHVljgU",
    authDomain: "forreact-d2eae.firebaseapp.com",
    databaseURL: "https://forreact-d2eae-default-rtdb.firebaseio.com",
    projectId: "forreact-d2eae",
    storageBucket: "forreact-d2eae.appspot.com",
    messagingSenderId: "504176096587",
    appId: "1:504176096587:web:963fa501c15d936e4264ce"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

export default fire;
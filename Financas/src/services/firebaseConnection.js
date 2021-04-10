import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: 'AIzaSyBIXveM6CJz65VTrdhqLPI1qvTb_n6oG2I',
  authDomain: 'test-firebase-4f19a.firebaseapp.com',
  databaseURL: 'https://test-firebase-4f19a-default-rtdb.firebaseio.com',
  projectId: 'test-firebase-4f19a',
  storageBucket: 'test-firebase-4f19a.appspot.com',
  messagingSenderId: '273480454118',
  appId: '1:273480454118:web:7828369aaec6b9c1b59027',
  measurementId: 'G-X5M74EGHNS',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

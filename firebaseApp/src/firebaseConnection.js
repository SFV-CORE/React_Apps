import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
  //api key
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

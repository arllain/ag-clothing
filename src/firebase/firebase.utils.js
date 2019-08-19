import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: 'AIzaSyDvnwC0WfCT6jX2W_JMzzqXjt8O3hwPgaY',
   authDomain: 'crown-db-af5f6.firebaseapp.com',
   databaseURL: 'https://crown-db-af5f6.firebaseio.com',
   projectId: 'crown-db-af5f6',
   storageBucket: '',
   messagingSenderId: '876220814718',
   appId: '1:876220814718:web:8a62bb39ce801671'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

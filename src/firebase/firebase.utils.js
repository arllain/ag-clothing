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

export const createUserProfileDocument = async (userAuth, addtionalData) => {
   if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get();

   if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createAt = new Date();
      try {
         await userRef.set({
            displayName,
            email,
            createAt,
            ...addtionalData
         });
      } catch (error) {
         console.log('error creating user', error.message);
      }
   }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

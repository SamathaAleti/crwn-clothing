import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCdjIOcT31BsLLs0TiJYFEMrelYsYGI-YM",
    authDomain: "crwn-db-5ce80.firebaseapp.com",
    databaseURL: "https://crwn-db-5ce80.firebaseio.com",
    projectId: "crwn-db-5ce80",
    storageBucket: "crwn-db-5ce80.appspot.com",
    messagingSenderId: "987437841478",
    appId: "1:987437841478:web:c1271254c262d4a1ebde47",
    measurementId: "G-GRBTYYMGLW"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC27QxbrBJ81YZox_ct-lJA64cjV2DnJGw",
    authDomain: "coderecommerce-18c8a.firebaseapp.com",
    projectId: "coderecommerce-18c8a",
    storageBucket: "coderecommerce-18c8a.appspot.com",
    messagingSenderId: "790652639074",
    appId: "1:790652639074:web:345c7e53f7f109d73dfe3b"
  };

const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)

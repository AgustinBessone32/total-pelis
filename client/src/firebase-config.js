import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDDas571LTgQFiOgaa1Jz75bPMA6TUU_8s",
  authDomain: "total-pelis-8a824.firebaseapp.com",
  projectId: "total-pelis-8a824",
  storageBucket: "total-pelis-8a824.appspot.com",
  messagingSenderId: "67292744132",
  appId: "1:67292744132:web:cb600661fd81c18c1e7c91"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  const auth = fire.auth()

  export {auth}
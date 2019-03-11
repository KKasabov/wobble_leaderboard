import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyCqCM9j7QHoHScAV0xd82S1iON_lnMp-6E",
    authDomain: "rehapp-20213.firebaseapp.com",
    databaseURL: "https://rehapp-20213.firebaseio.com",
    projectId: "rehapp-20213",
    storageBucket: "rehapp-20213.appspot.com",
    messagingSenderId: "332323698302"
  };
firebase.initializeApp(config);
export default firebase;
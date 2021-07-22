import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyDrJi-RFfmv3kiS2i6230S7tdD_kJpT_j4",
    authDomain: "cakes-b0888.firebaseapp.com",
    projectId: "cakes-b0888",
    storageBucket: "cakes-b0888.appspot.com",
    messagingSenderId: "433627140956",
    appId: "1:433627140956:web:697631085eb34452816799"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const db=firebase.firestore()
  const auth=firebase.auth()


  export {db}
  export {auth}



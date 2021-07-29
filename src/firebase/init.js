  import firebase from 'firebase'
  //import firestore from 'firebase/firestore'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD2taDoj8-nEFepxKI0lZJIAV9qKJg0JZU",
    authDomain: "login-ng-19dae.firebaseapp.com",
    projectId: "login-ng-19dae",
    storageBucket: "login-ng-19dae.appspot.com",
    messagingSenderId: "237748824419",
    appId: "1:237748824419:web:bd15bfbbe341ecfaf04b56"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true });

  export default firebaseApp.firestore();

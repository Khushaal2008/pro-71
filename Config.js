import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyD5Y2LLedy93LOdv6mOhv4o4KZt7MXWCG4",
    authDomain: "project-70-story-hub-2.firebaseapp.com",
    projectId: "project-70-story-hub-2",
    storageBucket: "project-70-story-hub-2.appspot.com",
    messagingSenderId: "669025286716",
    appId: "1:669025286716:web:acc6e6e4f8d818c4152139"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
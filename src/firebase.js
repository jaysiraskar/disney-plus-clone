import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAyr7KuMdLcgmHQNiTn9Td04mbesxB4HPs",
  authDomain: "disney-clone-34cb0.firebaseapp.com",
  projectId: "disney-clone-34cb0",
  storageBucket: "disney-clone-34cb0.appspot.com",
  messagingSenderId: "223583312666",
  appId: "1:223583312666:web:62bb8506c564c47bf7aaa3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

// frontend-auth.js
import firebase from "firebase/app";
import "firebase/auth";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

firebase.initializeApp(firebaseConfig);

export const signup = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const login = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

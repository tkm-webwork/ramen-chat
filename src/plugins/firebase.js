import firebase from "firebase";

// 以下の値は各々設定して使用してください。

let firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.analytics();

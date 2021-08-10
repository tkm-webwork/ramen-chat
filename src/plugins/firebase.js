import firebase from "firebase";

// 以下の値は各々設定して使用してください。

let firebaseConfig = {
  apiKey: "AIzaSyARdaJXyULB6kS-KEAvB9NtJlPgli8wKfg",
  authDomain: "ramen-chat.firebaseapp.com",
  databaseURL: "https://ramen-chat-default-rtdb.firebaseio.com",
  projectId: "ramen-chat",
  storageBucket: "ramen-chat.appspot.com",
  messagingSenderId: "835985987733",
  appId: "1:835985987733:web:71fb9c8a23a9ec0c76639c",
  measurementId: "G-3MWPQC71HK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.analytics();

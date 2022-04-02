import * as firebase from "firebase/app";
import "firebase/auth";


// Your web app's Firebase configuration
const app =firebase.initializeApp ({
  apiKey: "AIzaSyCpgsjZ8EuVpVod4_s8nOjet2TyB1hEmiE",
  authDomain: "anpanmoney-cf5d0.firebaseapp.com",
  databaseURL: "https://anpanmoney-cf5d0-default-rtdb.firebaseio.com",
  projectId: "anpanmoney-cf5d0",
  storageBucket: "anpanmoney-cf5d0.appspot.com",
  messagingSenderId: "28971312083",
  appId: "1:28971312083:web:22ba4e81022e45f69ac526"
});

export default app;
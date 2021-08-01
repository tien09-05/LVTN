// import firebase from "firebase";
import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBHfqszrIfvr3EyrgGjpQTdqUMyQa_9SBw",
    authDomain: "storage-image-d6e7d.firebaseapp.com",
    projectId: "storage-image-d6e7d",
    storageBucket: "storage-image-d6e7d.appspot.com",
    messagingSenderId: "111720425623",
    appId: "1:111720425623:web:cc424d3f417381b4a6e1d2",
};

// export const app = firebase.initializeApp(firebaseConfig);
export const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

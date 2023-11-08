

const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyByshmJ0J4JlzlHEoudybWMomfwrMLpTsQ",
    authDomain: "testproyect-d75c5.firebaseapp.com",
    projectId: "testproyect-d75c5",
    storageBucket: "testproyect-d75c5.appspot.com",
    messagingSenderId: "723489352487",
    appId: "1:723489352487:web:37bc39d2879391b05a1702"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

module.exports = {
  db,
};


import firebase from 'firebase';

var firebaseConfig = {
	apiKey: "AIzaSyDdQAXbJBJ50d47Hh8LDhBGUbAHwb2VVpg",
    authDomain: "neofest-e1055.firebaseapp.com",
    projectId: "neofest-e1055",
    storageBucket: "neofest-e1055.appspot.com",
    messagingSenderId: "1080635997977",
    appId: "1:1080635997977:web:a91b11980a73dcfcc0cf88",
    measurementId: "G-9MGYCH5ST8"
};
	
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;

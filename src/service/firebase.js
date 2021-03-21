import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyA5JpHOqGlUQoDTJvNKbtszOF3D7l2usqc",
    authDomain: "pokemon-game-5a969.firebaseapp.com",
    databaseURL: "https://pokemon-game-5a969-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-5a969",
    storageBucket: "pokemon-game-5a969.appspot.com",
    messagingSenderId: "1029683589696",
    appId: "1:1029683589696:web:4c7aa148f28868d961e5a5"
  };

firebase.initializeApp(firebaseConfig);
export const fire = firebase;
export const database = firebase.database();

export default database;

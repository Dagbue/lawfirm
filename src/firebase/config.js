import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
    apiKey: "AIzaSyBKw6vPAC6ebNriPLB9zH3aO-dFLFQHy8E",
    authDomain: "alderwood-7ce18.firebaseapp.com",
    projectId: "alderwood-7ce18",
    storageBucket: "alderwood-7ce18.firebasestorage.app",
    messagingSenderId: "439004621417",
    appId: "1:439004621417:web:77a03c21f4b068461490f8"
};

// init firebase
initializeApp(firebaseConfig)





//init firebase auth
const auth = getAuth();

const database = getDatabase();

const db = getFirestore();

const storage = getStorage();

const analytics = getAnalytics();



export { auth, db, database, storage, analytics}


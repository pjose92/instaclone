import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here importing seed file
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyD48ik9KEuNzmm_KAa_z7OE-8Eni9ayMYU",
    authDomain: "instagram-97855.firebaseapp.com",
    projectId: "instagram-97855",
    storageBucket: "instagram-97855.appspot.com",
    messagingSenderId: "973475919806",
    appId: "1:973475919806:web:2a08044b0795d808d0abef"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where we are calling the seed file (ONCE ONLY);
// seedDatabase(firebase);

console.log('firebase', firebase);

export { firebase, FieldValue };
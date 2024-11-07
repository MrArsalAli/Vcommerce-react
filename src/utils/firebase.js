import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBybm7S6hPo_FRKNtDeysga7ftlMsAix_8",
    authDomain: "smit-bc807.firebaseapp.com",
    projectId: "smit-bc807",
    storageBucket: "smit-bc807.appspot.com",
    messagingSenderId: "504101330701",
    appId: "1:504101330701:web:bd7a31635c0fd943655a44",
    measurementId: "G-07W1WB249S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    auth,
    app
}
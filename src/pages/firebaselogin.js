// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {useNavigate} from 'react-router-dom';


import { getAuth, signInWithPopup , GoogleAuthProvider } from "firebase/auth";


const Firebaselogin = ()=>{


const navigateto = useNavigate();

function storeLogindata(name, email , image){
    sessionStorage.setItem("Name",name);
    sessionStorage.setItem("Email",email);
    sessionStorage.setItem("Image",image);
    sessionStorage.setItem("login",true);
}



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6Z4JD-jIeEXRPe7_dewV14CVLB-XIbqM",
  authDomain: "myns-9ce9a.firebaseapp.com",
  projectId: "myns-9ce9a",
  storageBucket: "myns-9ce9a.appspot.com",
  messagingSenderId: "1053629932722",
  appId: "1:1053629932722:web:314c4d9895d4f6843795ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const provider = new GoogleAuthProvider(app);


const auth = getAuth(app);
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);

    storeLogindata(user.displayName , user.email , user.photoURL);

    navigateto('/');
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

}

export default Firebaselogin;
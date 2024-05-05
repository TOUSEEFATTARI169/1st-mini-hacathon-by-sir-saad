// // Initialize Firebase
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA0xlJe9lx7SIdxZS76Ba1oabxVLRgDgF0",
//   authDomain: "st-login-page-99171.firebaseapp.com",
//   projectId: "st-login-page-99171",
//   storageBucket: "st-login-page-99171.appspot.com",
//   messagingSenderId: "13998263435",
//   appId: "1:13998263435:web:e83f153778e7bb9708d88e",
//   measurementId: "G-MR9M4CK3HZ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth= getAuth();
// export{app,auth};

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0xlJe9lx7SIdxZS76Ba1oabxVLRgDgF0",
  authDomain: "st-login-page-99171.firebaseapp.com",
  projectId: "st-login-page-99171",
  storageBucket: "st-login-page-99171.appspot.com",
  messagingSenderId: "13998263435",
  appId: "1:13998263435:web:003aeea81626e30a08d88e",
  measurementId: "G-WF78PP1GV7"
};

// Initialize Firebase
// 




const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth(app);
auth.languagCode = 'en'
const provider =new GoogleAuthprovider();
const googlelogin = document.getElementById("googleLogin")
googlelogin.addEventListener("click" ,function(){

    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      window.location.href="indexmanage.html"
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;});
})


// Signup function
function signup(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var restaurant = document.getElementById('restaurant').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            // Signed in
            var user = userCredential.user;
            alert("Signup success. User ID: " + user.uid);
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("Error: " + errorMessage);
        });
}



//google login

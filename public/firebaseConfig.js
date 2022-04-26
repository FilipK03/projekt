import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const firebaseConfig = {
   apiKey: "AIzaSyCdcgjqFGIkzqdRAZRC-JSmHi0J1yMo3cg",
   authDomain: "store-fd418.firebaseapp.com",
   projectId: "store-fd418",
   storageBucket: "store-fd418.appspot.com",
   messagingSenderId: "292376525080",
   appId: "1:292376525080:web:76000554d6d37d2a7a866d",
   measurementId: "G-1PCTH7PZTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()


// html elements
const loginForm = document.getElementById('loginForm')

console.log(loginForm)
loginForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  signInWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
  .then((cred)=>{
    return cred.user.getIdToken()
  }).then((token)=>{
document.cookie = `Bearer ${token}`
window.location.href = '/profile'
  })
  .catch((err)=>{
    if(err)throw err
  })
})





import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
import { getFirestore, doc, addDoc, setDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCxmpwtXoTHCAu4GKWWU4nsJ_B9X9KJzSE",
    authDomain: "netflix-clone-fb47c.firebaseapp.com",
    projectId: "netflix-clone-fb47c",
    storageBucket: "netflix-clone-fb47c.appspot.com",
    messagingSenderId: "405739854795",
    appId: "1:405739854795:web:120756c32c81988dedf44e"
  };

  const register = document.getElementById("register");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore();


  //registrera användare
  register.addEventListener("submit", (e)=> {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password).then((cred)=>{
      console.log(cred.user);
    }).catch((err)=> {
      console.log(err);
    })
    sendEmailVerification(auth.currentUser)
    .then(() => {
      // Email verification sent!
      // ...
      console.log("sent!")
    });
})
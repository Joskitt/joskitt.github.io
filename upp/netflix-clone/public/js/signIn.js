import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCxmpwtXoTHCAu4GKWWU4nsJ_B9X9KJzSE",
    authDomain: "netflix-clone-fb47c.firebaseapp.com",
    projectId: "netflix-clone-fb47c",
    storageBucket: "netflix-clone-fb47c.appspot.com",
    messagingSenderId: "405739854795",
    appId: "1:405739854795:web:120756c32c81988dedf44e"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore();

  const loginForm = document.getElementById("loginForm")
  //logga in användare
  loginForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
    .then((cred)=>{
      return cred.user.getIdToken()
    }).then((token)=>{
      document.cookie = `Bearer ${token}`
      window.location.href = "/browse"
    })
    .catch((err)=>{
      if(err)throw err
    })
})
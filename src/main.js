import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth, db } from './app/firebase.js'
import { getDocs, collection  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

import { loginCheck } from './app/loginCheck.js'
import { setupPosts } from "./app/postList.js";

import './app/signupForm.js'
import './app/signInForm.js'
import './app/googleLogin.js'
import './app/fbLogin.js'
import './app/githubLogin.js'
import "./app/logout.js";

onAuthStateChanged(auth, async (user) => {
    // loginCheck(user)
    if (user) {
        const querySnapshot = await getDocs(collection(db, "posts"));
        setupPosts(querySnapshot.docs)
        //console.log(querySnapshot);
        //loginCheck(user)
    }else{
        // loginCheck(user)
        setupPosts([])
    }
    loginCheck(user)
})

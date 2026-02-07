import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { AuthContext } from "./AuthProvider";
import { auth } from "../firebase.init";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const FirebaseAuthProvider = ({ children }) => {

  const [user,setUser]=useState(null);
  const [loading, setLoading]=useState(true);

  // create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
// login user with email and password
const logInUser=(email, password)=>{
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password)
}

const googleLogin=()=>{
  setLoading(true);
  return signInWithPopup(auth,googleProvider );
}

const logOutUser=()=>{
  setLoading(true);
  return signOut(auth);
}

//create a new account,login user,logout user, observe user state change with,==> auth er state change listener
// onAuthStateChanged(auth, (currentUser)=>{
//   if(currentUser){
//     console.log("User is logged in", currentUser);
//   }else{
//     console.log("User is logged out");
//   }
// })

useEffect(()=>{
  const unsubscribe= onAuthStateChanged(auth, currentUser=>{
    console.log("Auth state changed, current user:", currentUser);
    setUser(currentUser);
    setLoading(false);
  })
  return ()=>{
    unsubscribe();
  }
},[])

  const userInfo = {
    user,
    loading,
    createUser,
    logInUser,
    logOutUser,
    googleLogin,
  }


  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
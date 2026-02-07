import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "./AuthProvider";
import { auth } from "../firebase.init";


const FirebaseAuthProvider = ({ children }) => {

  // create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
// login user with email and password
const logInUser=(email, password)=>{
  return signInWithEmailAndPassword(auth, email, password)
}

//create a new account,login user,logout user, observe user state change with,==> auth er state change listener
onAuthStateChanged(auth, (currentUser)=>{
  if(currentUser){
    console.log("User is logged in", currentUser);
  }else{
    console.log("User is logged out");
  }
})


  const userInfo = {
    createUser,
    logInUser
  }


  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
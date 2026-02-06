import { AuthContext } from "./AuthProvider";


const FirebaseAuthProvider = ({children}) => {

const userInfo={
     email:'potato@alo.com',
  name:'potato',
  id:1234,
} 


    return (
      <AuthContext value={userInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default FirebaseAuthProvider;
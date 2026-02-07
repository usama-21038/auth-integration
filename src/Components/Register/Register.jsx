import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {

const {createUser}=use(AuthContext);


const handleRegister = (e)=>{
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
console.log(name,email,password);



//create user with firebase auth
// createUserWithEmailAndPassword(auth, email, password)
// .then(result=>{
//     console.log(result);
// })
// .catch(error=>{
//     console.log(error);
// })
createUser(email, password)
.then(result=>{console.log(result)})
.catch(error=>{console.log(error)})
}

    return (
         <div className= "mt-10 border-amber-500 border-[3px] p-8 text-center rounded-4xl mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl font-bold">Register Now</h1>
      <div className="card-body">
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Enter Your Name" />
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input  name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
        <p>Already have an account? please <Link className='text-blue-700 hover:underline' to="/login">Login</Link></p>
      </div>
    </div>
    );
};

export default Register;
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../../Context/AuthProvider';

const Login = () => {

const {logInUser}=use(AuthContext);

const handleLogin = (e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
console.log(email,password);
// login user with firebase auth
logInUser(email, password)
.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
})
}

  return (

    <div className= "mt-10 border-amber-500 border-[3px] p-8 text-center rounded-4xl mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>New to This Site? please <Link className='text-green-700 hover:underline' to="/register">Register</Link></p>
      </div>
    </div>

  );
};

export default Login;
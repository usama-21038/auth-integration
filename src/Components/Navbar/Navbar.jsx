
import { NavLink, Link } from 'react-router';
import './Navbar.css';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {

  const {user, logOutUser}=useContext(AuthContext);
  console.log(user)

// const userInfo= use(AuthContext);
// console.log('UserInfo in the navbar ',userInfo);

const handleLogout=()=>{
  logOutUser()
  .then(()=>{
    console.log("User logged out successfully");
  })
  .catch(error=>{
    console.log("Error logging out user", error);
  })
}


const links=<>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/register">Register</NavLink>
    <NavLink to="/dashboard">Dashboard</NavLink>
    {user && <>
    <NavLink to="/orders">Orders</NavLink>
    <NavLink to="/profile">Profile</NavLink>
    </>}
    </>
        
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="gap-5 menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="gap-10 menu menu-horizontal px-1">
        {links}
    </ul>
  </div>
  <div className="navbar-end">
    {user ? 
       <>
       <span>{user.email}</span>
        <a onClick={handleLogout} className="btn">Logout</a>
       </> : 
        <Link to="/login" className="btn">Login</Link>}
  </div>
</div>
    );
};

export default Navbar;
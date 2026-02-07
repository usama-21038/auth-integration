import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './LayOuts/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Register from './Components/Register/Register.jsx';
import Login from './Components/Home/Login/Login.jsx';
import FirebaseAuthProvider from './Context/FirebaseAuthProvider.jsx';


// export const AuthContext= createContext(null);

// const userInfo={
//   email:'potato@alo.com',
//   name:'potato',
//   id:1234,
// }

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {index:true, Component:Home},
      {path:"/login", Component: Login},
      {path:"/register", Component:Register},
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseAuthProvider>
       <RouterProvider router={router} />
    </FirebaseAuthProvider>
  </StrictMode>,
)

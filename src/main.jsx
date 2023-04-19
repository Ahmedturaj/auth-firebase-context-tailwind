import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Layout/Main';
import Home from './Layout/components/Home';
import Register from './Layout/components/Register';
import Login from './Layout/components/Login';
import AuthProvider from './providers/AuthProvider';
import PrivateRoot from './PrivateRoot/PrivateRoot';
import Orders from './Layout/components/Orders';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'register',
        element:<Register></Register>
      },
{
  path:'login',
  element:<Login></Login>
},
{
  path:'orders',
  element:<PrivateRoot><Orders></Orders></PrivateRoot>
}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

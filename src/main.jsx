import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import cartProductsLoder from './Loder/CartProductsLoder';
import ProceedChaker from './components/ProceedChaker/ProceedChaker';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './Providers/AuthProvider';
import PrivateRoute from './components/router/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
        loader: cartProductsLoder
      },
      {
        path: "/inventory",
        element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
      },
      {
        path: "/proceedChaker",
        element: <PrivateRoute><ProceedChaker></ProceedChaker></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
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

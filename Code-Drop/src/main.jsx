import React from 'react'
import './index.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './Pages/Landing.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Signup from './Pages/Signup.jsx';
import Login from './Pages/Login.jsx';
import Create from './Pages/Create.jsx';
import CDPreview from './Pages/CDPreview.jsx';
import Drawer from './Components/Drawer.jsx';
import Edit from './Pages/Edit';

const router = createBrowserRouter([
  {
    path: "/landing",
    element: <Landing />,
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <Drawer />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "/create",
        element: <Create />
      },
      {
        path: ":id",
        element: <CDPreview />
      },
      {
        path: "edit/:id",
        element: <Edit />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

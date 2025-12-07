import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main.jsx';
import Phones from './component/Phones.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/Phones",
        element: <Phones />,
        loader:()=>fetch('http://localhost:5000/phones')
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import ProfilePicture from './profilePicture'
import Title from './title'
import Button from './button'
import About from './about'
import Interestests from './interestests'
import Footer from './footer'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/kabir",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProfilePicture />
    <div className='mainContent'>      
      <Title />
      <Button />
      <div className='ai'>
        <About />
        <Interestests />
      </div>
      <Footer />
    </div>



  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WebDevPage from './pages/WebDevPage';
import AppDevPage from './pages/AppDevPage';
import ManufacturingERPPage from './pages/ManufacturingERPPage';
import HRMSPage from './pages/HRMSPage';
import CRMPage from './pages/CRMPage';
import SchoolERPPage from './pages/SchoolERPPage';
import CustomDevPage from './pages/CustomDevPage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import SigninPage from './pages/SigninPage';
import ContactUsPage from './pages/ContactUsPage';
import AboutUsPage from './pages/AboutUsPage';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/aboutus",
    element:<AboutUsPage/>
  },
  {
    path:"/web-development",
    element:<WebDevPage/>
  },
  {
    path:"/App-development",
    element:<AppDevPage/>
  },
  { 
    path:"/Manufacturing-ERP",
    element:<ManufacturingERPPage/>
  },
  {
    path:"/HRMS-Solutions",
    element:<HRMSPage/>
  },
  {
    path:"/CRM-System",
    element:<CRMPage/>
  },
  {
    path:"/School-ERP",
    element:<SchoolERPPage/>
  },
  {
    path:"/Custom-development",
    element:<CustomDevPage/>
  },
  {
    path:"/Digital-Marketing",
    element:<DigitalMarketingPage/>
  },
  {
    path:"/Signin",
    element:<SigninPage/>
  },
  {
    path:"/Contactus",
    element:<ContactUsPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


reportWebVitals();

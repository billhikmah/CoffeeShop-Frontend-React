import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";

import Home from './pages/Home';
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Forgot from "./pages/Forgot";
import History from "./pages/History";
import Payment from "./pages/Payment";
import Productdetails from "./pages/Product-details";
import Search from './pages/Search';
import AddProduct from "./pages/Add-Product";
import EditProduct from "./pages/Edit-Product";
import AddPromo from "./pages/Add-Promo";

import PrivateAuthRoute from "./components/PrivateRoute/PrivateAuthRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PrivateAdminRoute from "./components/PrivateRoute/PrivateAdminRoute";

function Router() {
  return(
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element={<PrivateAuthRoute><Auth/></PrivateAuthRoute>}/>
          <Route path="/login" element={<PrivateAuthRoute><Login/></PrivateAuthRoute>}/>
          <Route path="/forgot" element={<PrivateAuthRoute><Forgot/></PrivateAuthRoute>}/>
          
          <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/history" element={<PrivateRoute><History/></PrivateRoute>}/>
          <Route path="/payment" element={<PrivateRoute><Payment/></PrivateRoute>}/>
          <Route path="/product/details/:id" element={<Productdetails/>}/>
          <Route path="/search" element={<PrivateRoute><Search/></PrivateRoute>}/>
          <Route path="/product/new" element={<PrivateAdminRoute><PrivateRoute><AddProduct/></PrivateRoute></PrivateAdminRoute>}/>
          <Route path="/product/update/:id" element={<PrivateAdminRoute><PrivateRoute><EditProduct/></PrivateRoute></PrivateAdminRoute>}/>
          <Route path="/promo/new" element={<PrivateAdminRoute><PrivateRoute><AddPromo/></PrivateRoute></PrivateAdminRoute>}/>
        </Routes>
      </BrowserRouter>
    </ReduxProvider>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>
);



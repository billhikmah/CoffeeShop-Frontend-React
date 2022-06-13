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

import PrivateAuthRoute from "./components/PrivateRoute/PrivateAuthRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

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
          <Route path="/product" element={<PrivateRoute><Product/></PrivateRoute>}/>
          <Route path="/history" element={<PrivateRoute><History/></PrivateRoute>}/>
          <Route path="/payment" element={<PrivateRoute><Payment/></PrivateRoute>}/>
          <Route path="/product/details/:id" element={<PrivateRoute><Productdetails/></PrivateRoute>}/>
          <Route path="/search" element={<PrivateRoute><Search/></PrivateRoute>}/>
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



import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import AuthPage from './pages/AuthPage/AuthPage';
import ProductPage from './pages/ProductPage/ProductPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import data from "./data"

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="HomePage" element={<HomePage />} />
        <Route path="ProductPage" element={<ProductPage />} />
        <Route path="AboutPage" element={<AboutPage />} />
        <Route path="CheckoutPage" element={<CheckoutPage />} />
        <Route path="AuthPage" element={<AuthPage />} />
      </Routes>

    </div>
  )
}
/* <Navbar /> */ 
export default App;

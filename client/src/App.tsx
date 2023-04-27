import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import AuthPage from './pages/AuthPage/AuthPage';
import ProductPage from './pages/ProductPage/ProductPage';

function App(): JSX.Element {
  return (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="AboutPage" element={<AboutPage />} />
      <Route path="AuthPage" element={<AuthPage />} />
      <Route path="ProductPage" element={<ProductPage />} />
    </Routes>
  </div>
  )
}

export default App;

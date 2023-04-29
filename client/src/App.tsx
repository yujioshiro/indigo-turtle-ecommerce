import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import AuthPage from './pages/AuthPage/AuthPage';
import ProductPage from './pages/ProductPage/ProductPage';

import data from "./data"

function App(): JSX.Element {
  const DataJs = data.map(item => {
    return(
      <HomePage 
          key={item.id}
          item={item}
    )
  })
 
  return (
    <div className="App">
      <Routes>
        <Route path="AboutPage" element={<AboutPage />} />
        <Route path="AuthPage" element={<AuthPage />} />
        <Route path="ProductPage" element={<ProductPage />} />
      </Routes>

      <section>{DataJs}</section>
    </div>
  )
}
/* <Navbar /> */ 
export default App;

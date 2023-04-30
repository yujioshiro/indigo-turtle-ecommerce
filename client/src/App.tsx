import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import AuthPage from './pages/AuthPage/AuthPage';
import ProductPage from './pages/ProductPage/ProductPage';
import { Provider } from 'react-redux'
import store from './store';

import data from "./data"

function App(): JSX.Element {
  /*
  const DataJs = data.map(item => {
    return(
      <HomePage 
          key={item.id}
          item={item}
    )
  })
  */
 
  return (
  <Provider store={store}>
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="Auth" element={<AuthPage />} />
      <Route path="AboutPage" element={<AboutPage />} />
      <Route path="AuthPage" element={<AuthPage />} />
      <Route path="ProductPage" element={<ProductPage />} />
    </Routes>
  </div>
  </Provider>
  )
}
/* <Navbar /> */ 
export default App;

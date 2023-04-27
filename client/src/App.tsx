import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './pages/AuthPage/AuthPage';

function App(): JSX.Element {
  return <div className="app">
    <Router>
      <Routes>
        <Route path="/" element={<Auth />}/>
      </Routes>
    </Router>
  </div>;
}

export default App;

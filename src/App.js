import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Home />
      <Routes>
        <Route path='/' element={Home}/>
        <Route path='/about' element={About} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

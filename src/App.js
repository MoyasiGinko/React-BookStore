import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavMenu from './components/Navbar';
import Category from './components/CategoryApp';
import Store from './components/BookstoreApp';
import './App.css';

const App = () => (
  <Router>
    <NavMenu />
    <Routes>
      <Route path="/" element={<Store />} />
      <Route path="/categories" element={<Category />} />
    </Routes>
  </Router>
);

export default App;

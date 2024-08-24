import React from 'react';
import ReactDOM from 'react-dom/client';
// Import css
import './styles/style.css';
// Import Pages
import Home_Page from './pages/home/index';
import Menu_Page from './pages/menu/index';
import Locations from './pages/location';
//Import React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home_Page />} />
        <Route path="/Menu" element={<Menu_Page />} />
        <Route path="/Locations" element={<Locations/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

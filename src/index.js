import React from 'react';
import ReactDOM from 'react-dom/client';
// Import css
import './styles/style.css';
// Import Pages
import Home_Page from './pages/home/index';
import Menu_Page from './pages/menu/index';
import Locations from './pages/location';
import Jobs from './pages/jobs';
//Import React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/shop';
import Products from './pages/products';
import { ListeProvider } from './utils/Liste-items';
import NotFound from './components/404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_Page />} />
          <Route path="/Menu" element={<Menu_Page />} />
          <Route path="/Locations" element={<Locations />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ListeProvider>
  </React.StrictMode>
);

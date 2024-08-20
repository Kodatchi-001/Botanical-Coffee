import React from 'react';
import ReactDOM from 'react-dom/client';
//Import css
import './styles/style.css'
//Import Pages
import Home_Page from './pages/home-page/home-page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home_Page/>
  </React.StrictMode>
);


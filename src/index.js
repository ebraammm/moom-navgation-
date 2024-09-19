import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import app from './firebase';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
);


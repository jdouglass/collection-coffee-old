import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

createRoot(
  document.getElementById("root")
)
  .render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <App /> } />
          <Route path="/products" element={ <App /> } />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
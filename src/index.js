import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import ProjectDorker from './pages/ProjectDorker';
import ProjectDatano from './pages/ProjectDatano';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/dorker" element={<ProjectDorker />} />
        <Route path="/projects/datano" element={<ProjectDatano />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();

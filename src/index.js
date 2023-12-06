import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import ProjectDorker from './pages/ProjectDorker';
import ProjectDatano from './pages/ProjectDatano';
import ProjectBapz from './pages/ProjectBapz';
import ProjectCompiler from './pages/ProjectCompiler';
import PostDeploy from './pages/posts/PostDeploy';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectWebmac from './pages/ProjectWebmac';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects/dorker" element={<ProjectDorker />} />
        <Route path="/projects/datano" element={<ProjectDatano />} />
        <Route path="/projects/bapz" element={<ProjectBapz />} />
        <Route path="/projects/compiler" element={<ProjectCompiler />} />
        <Route path="/projects/webmac" element={<ProjectWebmac />} />

        <Route path="/posts/deploy" element={<PostDeploy />} />


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
// STYLES
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'animate.css';
// STYLE LOCALS
import './styles/main.css';
import './styles/aboutStyle.css';
import './styles/experienceStyle.css';
import './styles/skillsStyle.css';
import './styles/projectsStyle.css';
import './styles/contactStyle.css';
import './styles/noFoundPageStyle.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

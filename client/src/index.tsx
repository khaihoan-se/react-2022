import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import axios from 'axios'
import LayoutBasic from 'components/Layouts/LayoutBasic';


axios.defaults.baseURL = 'http://localhost:5000/api'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LayoutBasic>
        <App />
      </LayoutBasic>
    </BrowserRouter>
  </React.StrictMode>
);
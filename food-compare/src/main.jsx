import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from './context/FavoritesContext.jsx';
import { CompareProvider } from './context/CompareContext.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <FavoritesProvider>
        <CompareProvider>
         <App />
        </CompareProvider>
      </FavoritesProvider>
    </BrowserRouter>
  </StrictMode>

)

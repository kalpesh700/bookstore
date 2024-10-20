// src/index.js

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for createRoot
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'; // Import your App component
import { AuthProvider } from '../../backend/AuthContext.jsx'; // Import AuthProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> {/* Wrap the app with AuthProvider */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);

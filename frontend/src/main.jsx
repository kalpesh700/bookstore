import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for createRoot
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'; // Import your App component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <App /> {/* No need for an extra div here */}
=======
    <div >
    <App />
    </div>
     
>>>>>>> a7cea7e906f9d0493739c442fcd8555b17dfb9ed
    </BrowserRouter>
  </StrictMode>
);

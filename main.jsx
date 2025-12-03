// main.jsx

// Certifique-se de que esta linha está presente:
import React from 'react'; 
// Certifique-se de que o ReactDOM também está presente:
import ReactDOM from 'react-dom/client'; 
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
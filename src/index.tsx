import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import ThemeContextProvider from './context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);

// O Provider é utilizado para que o Contexto 
// seja acessível em toda a aplicação.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Portfolio from './Portfolio';
import { DarkModeProvider } from './contexts/darkModeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <DarkModeProvider>
    <React.StrictMode>
      <Portfolio />
    </React.StrictMode>
  </DarkModeProvider>
);

reportWebVitals();

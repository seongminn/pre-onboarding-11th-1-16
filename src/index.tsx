import { Global } from '@emotion/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { reset } from '@/styles/reset';

import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global styles={reset} />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

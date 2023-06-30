import { Global } from '@emotion/react';
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { reset } from './style/reset';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Global styles={reset} />
    <App />
  </React.StrictMode>,
);

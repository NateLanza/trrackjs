import { StrictMode } from 'react';
import { HashRouter } from "react-router-dom";
import * as ReactDOM from 'react-dom/client';

import App from './app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter base="/">
    <StrictMode>
      <App />
    </StrictMode>
  </HashRouter>
);

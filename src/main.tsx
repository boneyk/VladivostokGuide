import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import 'antd/dist/reset.css';
import './styles/tokens.css';
import './styles/global.css';

// HashRouter, а не BrowserRouter: на GitHub Pages нет серверных редиректов,
// и прямая ссылка на /place/... иначе отдавала бы 404.
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);

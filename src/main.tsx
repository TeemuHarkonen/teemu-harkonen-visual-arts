import { createRoot } from 'react-dom/client'

import './style/index.css'
import './style/atomic.css'

import App from './App.tsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

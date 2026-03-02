import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css?=v1.1'
import './styles/App.css?=v1.1'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import './theme.scss'
import App from './App.jsx'
import "./utils/localiser.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

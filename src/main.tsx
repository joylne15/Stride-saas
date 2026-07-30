import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// @ts-ignore: Importing CSS as a side-effect; declarations are handled elsewhere
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

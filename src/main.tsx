import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SearchProvider } from './context/searchContext.tsx'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <SearchProvider>
    <App />
    </SearchProvider>
  </StrictMode>,
)

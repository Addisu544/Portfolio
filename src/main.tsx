import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app/App'

import './styles/tokens.css'
import './styles/base.css'
import './styles/app.css'
import './styles/sections.css'

const rootEl = document.getElementById('root')
if (!rootEl) throw new Error('Missing #root')

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


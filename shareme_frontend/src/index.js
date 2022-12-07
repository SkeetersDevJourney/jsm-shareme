import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

import App from './App'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <GoogleOAuthProvider clientId=''>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GoogleOAuthProvider>
)
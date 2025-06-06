import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthState from './context/AuthState'
import { GoogleOAuthProvider } from '@react-oauth/google';


const clientId = import.meta.env.VITE_API_GOOGLE_CLIENT_ID;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <AuthState>
        <App />
      </AuthState>
    </GoogleOAuthProvider>
  </StrictMode>,
)

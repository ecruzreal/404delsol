import { StrictMode } from 'react'
import { createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import './ContactForm.css'
import './Header.css'
import './Body.css'
import './Footer.css'
import './Contact.css'
import ContactForm from './ContactForm.jsx'
import App from './App.jsx'
import ScrollToTop from './ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <App />
  </BrowserRouter>,
)

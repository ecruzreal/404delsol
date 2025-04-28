import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactForm from './ContactForm'
import Header from './Header'
import Body from './Body';

function App() {
  return (
    <div className='app-container'>
        <Header />
        <Body />
    </div>
  )
};

export default App

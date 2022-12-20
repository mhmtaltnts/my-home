import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ColorContextProvider } from './context/ColorContext';
import "./index.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <ColorContextProvider>
      <App />    
    </ColorContextProvider>    
  </React.StrictMode>,
)

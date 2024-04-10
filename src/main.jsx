import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
    <Routes>
<Route path="/" element={<App isadmin={false} />}/>

<Route path="/admin" element={<App isadmin={true} />} />
    </Routes>
  
    </BrowserRouter>
    
  </React.StrictMode>,
)

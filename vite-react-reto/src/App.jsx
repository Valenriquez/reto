import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
 import viteLogo from '/vite.svg'
 import NavigationBar from './components/NavigationBar'
import AbuelitosABP from './components/AbuelitosABP'
import './App.css'

function App() {
 
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <NavigationBar />
            <Routes>
              <Route path="/" element={<AbuelitosABP />} />
            </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App



 

/*  <Route path="/pams" element={<PersonasAdultasMayores />} />   
 <Route path="/pams/add" element={<ManagePam />} />
<Route path="/pams/edit/:pam_id" element={<ManagePam />} /> */
 
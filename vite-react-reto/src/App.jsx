import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
  import NavigationBar from './components/NavigationBar'
import AbuelitosABP from './components/AbuelitosABP'
 import Signup from './components/Signup';
import Administrador from './components/Administrador';
import AreaAfectiva from './components/AreaAfectiva';
import AreaFuncional from './components/AreaFuncional';
import AreaSocial from './components/AreaSocial';
import AreaFisica from './components/AreaFisica';
import AreaCognitiva from './components/AreaCognitiva';

import './App.css'

function App() {
 
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <NavigationBar />
            <Routes>
              <Route path="/" element={<AbuelitosABP />} />
                     <Route path='/signup' element={<Signup />} />
                    <Route path='/areacognitiva' element={<AreaCognitiva />} />
                    <Route path='/areafuncional' element={<AreaFuncional />} />
                    <Route path='/areaafectiva' element={<AreaAfectiva />} />
                    <Route path='/areasocial' element={<AreaSocial />} />
                    <Route path='/areafisica' element={<AreaFisica />} />
                     <Route path='/admin' element={<Administrador />} />        
            </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

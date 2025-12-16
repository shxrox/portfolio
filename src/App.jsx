
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home.jsx';
import About from './components/About.jsx'
import Error from './components/Error.jsx';



function App() {


  return (
    <Routes>
   
    <Route path="/Profile" element={<Home />} />
    <Route path="*" element={<Error />} />
    </Routes>
 )
}

export default App
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from '../Pages/Homepage/Home'
import Dashboard from '../Pages/Dashboardpage/Dashboard'

function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/dashboard' element={<Dashboard />}/>
    </Routes>
    </>
  )
}

export default App

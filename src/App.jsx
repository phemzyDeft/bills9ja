import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from '../Pages/Homepage/Home'
import Dashboard from '../Pages/Dashboardpage/Dashboard'
import Loader from '../Utils/Loader'

function App() {

  const [loader, setLoader] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setLoader(true);
    }, 1000)
    setLoader(false);
  }, [])


  return (
    <>
    {!loader ? 
      <Loader />
    :
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/dashboard' element={<Dashboard />}/>
        <Route exact path='*' element={<Home />}/>
      </Routes>
      }
    </>
  )
}

export default App

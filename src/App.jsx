import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginForm from './pages/Login'
import LandingPage from './pages/LandingPage'
import SignUppage from './pages/SignUppage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/home" element={<LandingPage/>}/>
        <Route path="/signup" element={<SignUppage/>}/>
      </Routes>
    </>
  )
}

export default App

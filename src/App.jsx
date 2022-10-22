import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
export default function App() {
  return (
    <Routes>
      <Route path='' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

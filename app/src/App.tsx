import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Sidebar from "@/components/ui/sidebar"

function App() {
  return (
    <div className="flex">
      <Sidebar/>

      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/settings" element={<Settings />}/>
        
      </Routes>
    </div>
  )
}

export default App

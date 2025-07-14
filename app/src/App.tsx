import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Note from './pages/Note'
import Sidebar from "@/components/ui/sidebar"
import { Toaster } from 'sonner'

function App() {
  return (
    <div className="flex">
      <Sidebar/>

      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/note" element ={<Note />}/>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App

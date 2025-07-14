import { useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Note from './pages/Note'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Sidebar from "@/components/ui/sidebar"

import { Toaster } from 'sonner'

function AppLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <div className="flex">
      <Sidebar/>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="home" element={<Home />}/>
            <Route path="settings" element={<Settings />}/>
            <Route path="note" element={<Note />}/>
          </Route>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
      <Toaster />
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Note from './pages/Note'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Sidebar from "@/components/ui/sidebar"
import { ThemeProvider } from "@/components/ui/theme-provider"

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
    
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <div className="flex">      
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
  </ThemeProvider>
 
    
  )
}

export default App

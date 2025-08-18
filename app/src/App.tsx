// import { useState } from 'react'
import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Note from './pages/Note'
import DatePage from './pages/DatePage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Sidebar from "@/components/ui/sidebar"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Capacitor } from "@capacitor/core";
import { Toaster } from 'sonner'

function AppLayout() {
  const isAndroid = Capacitor.getPlatform() === "android";
  return (
    <div className={isAndroid ? "flex flex-col h-screen" : "flex"}>
      {isAndroid ? (
        <>
          <div className="flex-1 overflow-auto">
            <Outlet />
          </div>
          <Sidebar />
        </>
      ) : (
        <>
          <Sidebar />
          <div className="flex-1 overflow-auto">
            <Outlet />
          </div>
        </>
      )}
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
            <Route path="date/:dateString" element={<DatePage />}/>
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

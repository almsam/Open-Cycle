// components/ui/sidebar.tsx

import { Home, NotebookPen, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate, useLocation } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { Capacitor } from "@capacitor/core";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAndroid = Capacitor.getPlatform() === "android";
  const pathname = location.pathname;
  const isActive = (path: string) => pathname.includes(path);

  return (
    <div className={`p-4 space-y-4 ${
    isAndroid
      ? "bottom-0 w-screen h-52 border-t" 
      : "top-0 left-0 w-[200px] h-screen border-r" 
  }`}>
      <h2 className="text-xl font-bold text-[#a30262]">Open Cycle</h2>

      <nav className={`space-y-2 ${
        isAndroid
          ? "flex"
          : "flex flex-col"
      }`}>
        <Button variant="ghost" className={`justify-start ${isActive("home") ? "font-bold text-[#a30262]" : ""}${isAndroid ? "flex flex-col" : ""}`} onClick={() => navigate('home')}>
          <Home className="mr-2 h-5 w-5" />
          Home
        </Button>
        <Button variant="ghost" className={`justify-start ${isActive("note") ? "font-bold text-[#a30262]" : ""}${isAndroid ? "flex flex-col" : ""}`} onClick={() => navigate('note')}>
          <NotebookPen className="mr-2 h-5 w-5" />
          Note
        </Button>
        <Button variant="ghost" className={`justify-start ${isActive("setting") ? "font-bold text-[#a30262]" : ""}${isAndroid ? "flex flex-col" : ""}`} onClick={() => navigate('settings')}>
          <Settings className="mr-2 h-5 w-5" />
          Settings
        </Button>
        <ModeToggle />
        <Button variant="ghost" className={`justify-start ${isAndroid ? "flex flex-col" : ""}`}onClick={() => navigate('signout')}>
          <LogOut className="mr-2 h-5 w-5" />
          Sign out
        </Button>

      </nav>
    </div>
  )
}

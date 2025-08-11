// components/ui/sidebar.tsx

import { Home, NotebookPen, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate, useLocation } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathname = location.pathname;
  const isActive = (path: string) => pathname.includes(path);

  return (
    <div className="w-[200px] h-screen border-r p-4 space-y-4">
      <h2 className="text-xl font-bold text-[#a30262]">Open Cycle</h2>

      <nav className="flex flex-col space-y-2">
        <Button variant="ghost" className={`justify-start ${isActive("home") ? "font-bold text-[#a30262]" : ""}`} onClick={() => navigate('home')}>
          <Home className="mr-2 h-5 w-5" />
          Home
        </Button>
        <Button variant="ghost" className={`justify-start ${isActive("note") ? "font-bold text-[#a30262]" : ""}`} onClick={() => navigate('note')}>
          <NotebookPen className="mr-2 h-5 w-5" />
          Note
        </Button>
        <Button variant="ghost" className={`justify-start ${isActive("setting") ? "font-bold text-[#a30262]" : ""}`} onClick={() => navigate('settings')}>
          <Settings className="mr-2 h-5 w-5" />
          Settings
        </Button>
        <ModeToggle />
        <Button variant="ghost" className="justify-start" onClick={() => navigate('signout')}>
          Sign out
        </Button>

      </nav>
    </div>
  )
}

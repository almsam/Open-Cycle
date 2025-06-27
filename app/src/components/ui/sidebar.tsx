// components/ui/sidebar.tsx

import { Home, NotebookPen, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Sidebar() {
  return (
    <div className="w-[200px] h-screen border-r bg-white p-4 space-y-4">
      <h2 className="text-xl font-bold text-[#a30262]">My App</h2>

      <nav className="flex flex-col space-y-2">
        <Button variant="ghost" className="justify-start">
          <Home className="mr-2 h-5 w-5" />
          Home
        </Button>
        <Button variant="ghost" className="justify-start">
          <NotebookPen className="mr-2 h-5 w-5" />
          Note
        </Button>
        <Button variant="ghost" className="justify-start">
          <Settings className="mr-2 h-5 w-5" />
          Setting
        </Button>
        <Button variant="ghost" className="justify-start">
          Sign out
        </Button>
      </nav>
    </div>
  )
}

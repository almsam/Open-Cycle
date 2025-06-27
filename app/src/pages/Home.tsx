import { MenstruationCalendar } from "@/features/MenstrumentCalendar" 
import Sidebar from "@/components/ui/sidebar"

export default function Home() {
  return (
    <div className="flex h-screen">
        <Sidebar/>
        <div className="flex flex-col flex-1 items-center justify-start p-8 space-y-8">
            <h1 className="text-2xl font-semibold text-center">Open Cycle Calendar</h1>
            <MenstruationCalendar />
        </div>
    </div>
    
  )
}
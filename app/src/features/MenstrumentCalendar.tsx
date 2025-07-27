"use client"
import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { eachDayOfInterval, addDays, isSameDay } from "date-fns"
import { useState } from "react"



export function MenstruationCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const highlightDays = eachDayOfInterval({
    start: new Date(),
    end: addDays(new Date(), 5),
  }
  )
  

  return (
    <div>
      <Card className="max-w-[560px] w-full mx-auto p-6 border-[2px] border-[#a30262] mb-8">
          <Calendar
          mode="single"
          defaultMonth={new Date()}
          numberOfMonths={1}
          selected={date}
          onSelect={setDate}
          modifiers={{
          highlight: highlightDays,
          }}
          modifiersClassNames={{
          highlight: "bg-[#d162a4]",
          }}
          className="
              max-w-[500px] mx-auto text-base
              [&_[data-selected-single='true']]:bg-[#a30262]
              [&_[data-selected-single='true']]:text-white
              [&_button]:h-12 [&_button]:w-12 [&_button]:text-xl"
          />
      </Card>
      <text>{
          date ? `Selected: ${date.toLocaleDateString()}` : "Select a day to see details."
        }</text>
    </div>
    
  )
}


            

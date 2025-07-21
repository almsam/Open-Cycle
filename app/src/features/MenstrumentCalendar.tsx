"use client"
import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { eachDayOfInterval, addDays, isSameDay } from "date-fns"
import { useState } from "react"
//import  Calendar from 'react-yearly-calendar';
import './calstyles.css';


export function MenstruationCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const highlightDays = eachDayOfInterval({
    start: new Date(),
    end: addDays(new Date(), 5),
  }
  )
  const year = new Date().getFullYear();
  //const Calendar = require('react-yearly-calendar');

  return (
    
    //<Card className="max-w-[560px] w-full mx-auto p-6 border-[2px] border-[#a30262]">
      <div className="grid grid-cols-4">
        <Calendar
        mode="single"
        defaultMonth={new Date()}
        numberOfMonths={12}
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
            [&_button]:h-12 [&_button]:w-12 [&_button]:text-xl
            content-start"
        //captionLayout="dropdown"
        />
      </div>
    //</Card>
    
  )
}


            

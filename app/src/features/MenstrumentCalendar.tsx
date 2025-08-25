"use client";
//import * as React from "react"
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
//import { Label } from "@radix-ui/react-label"
//import { Button } from "@/components/ui/button"
import { eachDayOfInterval, addDays } from "date-fns";
import { useState } from "react";
//import type { url } from "inspector"
import { NotebookPen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Capacitor } from "@capacitor/core";
import { Legend } from "@/components/custom/legend";

export function MenstruationCalendar() {
  const isAndroid = Capacitor.getPlatform() === "android";
  const navigate = useNavigate();
  //const url = "http://localhost:5173/note";
  const [date, setDate] = useState<Date | undefined>(new Date());
  const formattedDate = date
    ? new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
      }).format(date)
    : "";
  const highlightDays = eachDayOfInterval({
    start: new Date(),
    end: addDays(new Date(), 5),
  });

  return (
    <div>
      <div className="flex h-screen">
        <div className="flex flex-col flex-1 items-center justify-start p-8 space-y-8">
          <h1 className="text-2xl font-semibold text-center">
            Open Cycle Calendar
          </h1>
          <div className={isAndroid ? "flex flex-col" : "flex items-start"}>
            <Card
              className={`border-[2px] border-[#a30262] w-full ${
                isAndroid ? "order-last" : "max-w-[560px] mx-auto p-6  mb-8"
              }`}
            >
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
            <Legend
              className={`border-[2px] border-[#00bfff] ${
                isAndroid ? "order-first hidden" : "ml-6 w-96 ..."
              }`}
            ></Legend>
            {/* <Card className={`border-[2px] border-[#00bfff] ${isAndroid ? "order-first hidden" : "ml-6 w-96 ..."}`}>
              <div id='legend' className="ml-2 place-items-start">
                <span className='today'> Today</span>
                <span className='previous'> Previous Cycle</span>
                <span className='next'> Next Cycle</span>
                <span className='note'> Day with a Note</span>
              </div>
            </Card> */}
          </div>
          <Card className="border-[2px] border-[#a30262] w-full">
            <div>
              <span>
                {date ? ` ${formattedDate}` : "Select a day to see details."}
                <br />
                previous period end:
                <br />
                next period start:
                <br />
              </span>
              <span>Make a note </span>
              {/*TODO: Change the link to the date */}
              <button onClick={() => navigate("/note")}>
                <NotebookPen className="mr-2 h-5 w-5" color="#33ccff" />
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

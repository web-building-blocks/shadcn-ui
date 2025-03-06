"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/UNSW/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("rounded-md bg-white p-3 shadow-md", className)} // Light gray background
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center text-gray-800", // Darker gray caption text
        caption_label: "text-base font-semibold", // Larger, bolder caption text
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 rounded-md bg-transparent p-0 text-gray-600 hover:bg-gray-100 hover:text-gray-800"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse",
        head_row: "flex",
        head_cell: "text-gray-600 font-medium text-xs text-center w-9",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 rounded-md p-0 font-normal transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        ),
        day_selected:
          "bg-yellow-300 text-white font-semibold hover:bg-yellow-300 focus:bg-yellow-300",
        day_today: "text-yellow-300 font-bold",
        day_outside: "text-gray-400 opacity-50",
        day_disabled: "text-gray-300 opacity-50",
        day_range_middle: "bg-yellow-300 text-yellow-300",
        day_hidden: "invisible",
        ...classNames,
      }}
      modifiersClassNames={{
        selected: "bg-yellow-300 text-white font-semibold h-9 w-9",
      }}
      modifiersStyles={{
        selected: {
          backgroundColor: "#FFDC00",
          color: "#ffffff",
          borderRadius: "4px",
        },
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <ChevronLeft className="h-4 w-4 text-gray-600 hover:text-gray-800" />
        ),
        IconRight: ({ ...props }) => (
          <ChevronRight className="h-4 w-4 text-gray-600 hover:text-gray-800" />
        ),
      }}
      {...props}
    />
  )
}

Calendar.displayName = "Calendar"

export { Calendar }

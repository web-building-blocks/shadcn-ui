"use client"

import * as React from "react"
import { forwardRef, useState } from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { motion } from "framer-motion"
import { Minus, Plus } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-t border-gray-300 transition-all", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "group flex flex-1 items-center justify-between p-4 text-xl font-bold transition-all hover:underline",
          className
        )}
        {...props}
      >
        {children}
        <div className="relative h-6 w-6">
          <div className="-m-1.7 absolute inset-0 rounded-full bg-blue-700/10 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
          <Plus className="h-5 w-5 text-blue-700 transition-transform duration-300 group-data-[state=open]:hidden" />
          <Minus className="hidden h-5 w-5 text-blue-700 transition-transform duration-300 group-data-[state=open]:block" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})

AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden px-4 pb-4 pt-2 text-base data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("text-gray-700", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          // Set the border to UNSW yellow (#FFDC00), keep the background neutral
          "flex min-h-[80px] w-full rounded-none border border-[#FFDC00] bg-transparent text-[#181716] px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFDC00] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          // Keeping transitions and focus styles with UNSW yellow theme
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }

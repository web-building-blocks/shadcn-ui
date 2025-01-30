import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-none",
  {
    variants: {
      variant: {
        default:
          "bg-yellow-300 text-neutral-900 hover:bg-yellow-400 focus:ring-yellow-400",
        secondary:
          "bg-black text-white hover:bg-neutral-600 border border-black hover:border-black",
        ghost:
          "bg-transparent text-neutral-900 hover:bg-neutral-100 focus:ring-neutral-900",
        destructive:
          "bg-red-600 text-white hover:bg-red-500 focus:ring-red-600",
        outline:
          "bg-yellow-300 text-neutral-900 hover:bg-yellow-400 focus:ring-yellow-400",
        link: "text-black underline hover:text-blue-500 focus:ring-blue-600",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3",
        lg: "h-12 px-6",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

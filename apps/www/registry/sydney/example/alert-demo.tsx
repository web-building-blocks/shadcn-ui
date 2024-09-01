import React from "react"
import { Terminal } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/default/ui/alert"
import { Toaster } from "@/registry/default/ui/toaster"
import { useToast } from "@/registry/default/ui/use-toast"

export default function AlertDemo() {
  const { toast } = useToast()

  function handleCheckClick() {
    toast({
      title: "Information Check",
      description: `You have check the message!`,
    })
  }

  return (
    <>
  <Toaster />
  <Alert className="relative group overflow-hidden bg-white text-black transition-colors duration-500 ease-in-out hover:bg-orange-500 hover:text-white">
    <Terminal className="h-4 w-4" />
    <AlertTitle>Information Update!</AlertTitle>
    Here is new information for you!{" "}
    <span
      onClick={() => handleCheckClick()}
      className="transition-colors duration-500 ease-in-out bg-orange-500 text-white inline-flex items-center justify-center px-5 py-1 rounded-2xl absolute right-4 group-hover:bg-white group-hover:text-orange-500"
    >
      Check!
    </span>
  </Alert>
</>
  )
}

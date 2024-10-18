"use client"

import * as React from "react"

import { Button } from "@/registry/sydney/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/sydney/ui/dropdown-menu"

export function DropdownMenuwithHeader() {
  const userEmail = "nzha9876@uni.sydney.edu.au"

  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([])

  const toggleOption = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    )
  }

  const getButtonLabel = () => {
    if (selectedOptions.length === 0) return "Select Options"
    return `Selected: ${selectedOptions.join(", ")}`
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{getButtonLabel()}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Signed in as</DropdownMenuLabel>
        <div className="email">{userEmail}</div>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={selectedOptions.includes("Account Settings")}
          onCheckedChange={() => toggleOption("Account Settings")}
        >
          Account Settings
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedOptions.includes("Support")}
          onCheckedChange={() => toggleOption("Support")}
        >
          Support
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedOptions.includes("License")}
          onCheckedChange={() => toggleOption("License")}
        >
          License
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedOptions.includes("Signout")}
          onCheckedChange={() => toggleOption("Signout")}
        >
          Signout
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuwithHeader

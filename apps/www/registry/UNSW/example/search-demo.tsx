"use client"

import * as React from "react"
import { Search } from "lucide-react"

import { Button } from "@/registry/UNSW/ui/button"
import { Input } from "@/registry/UNSW/ui/input"
import { Toaster } from "@/registry/UNSW/ui/toaster"
import { useToast } from "@/registry/UNSW/ui/use-toast"

export default function RadixSearch() {
  const [searchValue, setSearchValue] = React.useState("")
  const { toast } = useToast()

  const handleSearch = () => {
    if (!searchValue.trim()) {
      toast({
        title: "Error",
        description: "Content cannot be empty.",
        variant: "destructive",
      })
    } else {
      toast({
        title: "Search Initiated",
        description: `Searching for: ${searchValue}`,
      })
      console.log("Searching for:", searchValue)
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4 p-6">
      <Toaster />
      <div className="flex w-full max-w-2xl items-center space-x-2">
        <Input
          placeholder="Search for a degree"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="flex-1 border border-gray-300 bg-gray-100 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
        <Button variant="secondary" onClick={handleSearch}>
          <Search className="h-5 w-5" />
          Search
        </Button>
      </div>
    </div>
  )
}

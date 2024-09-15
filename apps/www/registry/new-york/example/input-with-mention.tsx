import React, { useRef, useState } from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"
import { Input } from "@/registry/default/ui/input"

export function InputMention() {
  const [inputValue, setInputValue] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const [options, setOptions] = useState([])
  const inputRef = useRef(null)

  const handleInputChange = (event) => {
    const value = event.target.value
    setInputValue(value)

    const lastChar = value[value.length - 1]
    if (lastChar === "@") {
      setOptions(["qq.com", "icloud.com", "gmail.com"])
      setShowDropdown(true)
    } else if (lastChar === "#") {
      setOptions(["1.0", "2.0", "3.0"])
      setShowDropdown(true)
    } else {
      if (!value.includes("@") && !value.includes("#")) {
        setShowDropdown(false)
      }
    }
  }

  const handleSelect = (option) => {
    const lastAt = inputValue.lastIndexOf("@")
    const lastHash = inputValue.lastIndexOf("#")
    const lastIndex = Math.max(lastAt, lastHash)
    if (lastIndex !== -1) {
      setInputValue(inputValue.substring(0, lastIndex + 1) + option + " ")
      setShowDropdown(false)
    }
    inputRef.current.focus()
  }

  return (
    <>
      <Input
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type '@' for emails or '#' for versions to trigger the menu"
        style={{ width: "500px" }}
      />
      <DropdownMenu open={showDropdown} onOpenChange={setShowDropdown}>
        <DropdownMenuTrigger asChild>
          <span></span>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-28"
          style={{ marginTop: "16px", marginRight: "130px" }}
        >
          {options.map((option, index) => (
            <DropdownMenuItem key={index} onClick={() => handleSelect(option)}>
              {option}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default InputMention

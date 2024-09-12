import React, { useState } from "react"

import { Button } from "@/registry/default/ui/button"

export function HoverButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? "#3f3f46" : "#e66e00",
      }}
    >
      Hover
    </Button>
  )
}

export default HoverButton

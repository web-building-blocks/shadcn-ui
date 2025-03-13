"use client"

import React, { useState } from "react"

import { Button } from "@/registry/UNSW/ui/button"
import { Card, CardContent } from "@/registry/UNSW/ui/card"

export function CardWithDrawer() {
  const [isHovered, setIsHovered] = useState(false)

  const imageUrl =
    "https://www.woodsbagot.com/wp-content/uploads/legacy/93/0-2048x1739.jpg"

  const navigateToSydneyUni = () => {
    window.open("https://www.sydney.edu.au/", "_blank")
  }

  return (
    <Card
      className="relative h-64 w-1/2 overflow-hidden rounded-lg shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageUrl}
        alt="Image Models"
        className="h-64 w-full rounded-t-lg object-cover"
      />
      <CardContent
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          transition: "transform 0.3s",
          transform: isHovered ? "translateY(0)" : "translateY(100%)",
          backgroundColor: "black",
          color: "white",
          padding: "1rem",
        }}
      >
        <h3 className="font-bold">University of Sydney</h3>
        <div className="mt-4 flex items-center">
          <img
            src="https://www.woodsbagot.com/wp-content/uploads/legacy/93/0-2048x1739.jpg"
            alt="User Avatar"
            className="mr-2 h-8 w-8 rounded-full"
          />
          <span>Logged in as Mariana</span>
        </div>
        <Button
          variant="secondary"
          className="mt-4 w-full"
          onClick={navigateToSydneyUni}
        >
          Explore More
        </Button>
      </CardContent>
    </Card>
  )
}

export default CardWithDrawer

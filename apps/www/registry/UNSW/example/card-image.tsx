import * as React from "react"

import { Button } from "@/registry/UNSW/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/UNSW/ui/card"

export function CardWithPicture() {
  const imageUrl =
    "https://www.woodsbagot.com/wp-content/uploads/legacy/93/0-2048x1739.jpg"

  return (
    <Card className="max-w-md overflow-hidden rounded-md bg-white shadow-sm">
      <img
        src={imageUrl}
        alt="University Building"
        className="h-60 w-80 object-cover object-center"
      />
      <CardHeader className="bg-gray-100 p-3">
        <CardTitle className="text-lg font-semibold">Contact us</CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        <CardDescription className="mb-3 text-sm">
          Submit a partnership enquiry, you can
          <br /> also make a donation by contacting
          <br /> the University revenue team.
        </CardDescription>
        <Button className=" w-full px-4 py-4">Explore more →</Button>
      </CardContent>
    </Card>
  )
}

export default CardWithPicture

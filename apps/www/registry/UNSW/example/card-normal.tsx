import * as React from "react"

import { Button } from "@/registry/UNSW/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/UNSW/ui/card"

export function CardWithNormal() {
  return (
    <Card className="w-[350px] overflow-hidden rounded-lg bg-white shadow-sm">
      <CardHeader className="bg-gray-100 p-4">
        <CardTitle className="text-lg font-semibold">Contact us</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <CardDescription className="mb-4 text-sm">
          Submit a partnership enquiry or make a donation by contacting the
          University revenue team.
        </CardDescription>
        <Button className="w-full bg-black px-4 py-2 text-white hover:bg-black">
          Explore more →
        </Button>
      </CardContent>
    </Card>
  )
}

export default CardWithNormal

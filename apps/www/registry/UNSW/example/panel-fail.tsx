import * as React from "react"

import { Button } from "@/registry/UNSW/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/UNSW/ui/card"

export default function FailPanel() {
  return (
    <Card className="w-[350px] rounded-md bg-white shadow-md">
      <CardHeader className="rounded-t-md bg-[#FFDC00] p-4 font-semibold">
        <CardTitle className="text-center font-bold text-black">
          Application Failed
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <CardDescription className="text-center text-black">
          Please try again
        </CardDescription>

        <CardDescription className="text-center">
          <Button className="mt-4 bg-[#FFDC00] font-semibold text-black">
            Back
          </Button>
        </CardDescription>
      </CardContent>
    </Card>
  )
}

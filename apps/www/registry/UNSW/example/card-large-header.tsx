import * as React from "react"

import { Button } from "@/registry/UNSW/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/UNSW/ui/card"

export function LargeHeaderCard() {
  return (
    <Card className="mx-auto max-w-xl overflow-hidden rounded-lg bg-white p-2 shadow-sm">
      <div>
        <CardHeader className="mb-2 text-2xl font-bold">
          The University of Sydney is ranked 19th <br /> in the 2024 QS World
          University Rankings
        </CardHeader>
        <CardDescription className="mb-4 ml-6 text-sm">
          The University of Sydney was founded on the principle of giving
          everyone
          <br />
          the opportunity to realise their potential through education and still
          holds
          <br />
          that belief just as strongly today.
        </CardDescription>
      </div>
      <div className="ml-6 text-right">
        <Button className="mt-2 px-4 py-1">Explore your study options →</Button>
      </div>
    </Card>
  )
}

export default LargeHeaderCard

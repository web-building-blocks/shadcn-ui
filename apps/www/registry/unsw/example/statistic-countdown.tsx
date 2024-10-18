import React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"
// Importing your custom Card components
import { Countdown, Scountdown } from "@/registry/default/ui/countdown"

function CountdownStatistic() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Countdown</CardTitle>
      </CardHeader>
      <CardContent>
        <Scountdown />
        <div style={{ marginTop: "30px" }}>
          <CardTitle>Day Level</CardTitle>
          <Countdown />
        </div>
      </CardContent>
    </Card>
  )
}
export default CountdownStatistic

import { useState } from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/UNSW/ui/card"

function DynamicCardComponent() {
  const [hovered, setHovered] = useState<string | null>(null)

  const data = [
    {
      name: "analytics",
      value: "12,403",
      change: "+15% /wk",
      color: "#38b2ac",
      barWidth: "70%",
    },
    {
      name: "emails",
      value: "112,403",
      change: "+15% /wk",
      color: "#f56565",
      barWidth: "90%",
    },
  ]

  const footerContent = {
    analytics: { label: "High Latency Detected", time: "8s" },
    emails: { label: "Online Now", count: "1,302" },
  }

  return (
    <Card className="w-full rounded-lg bg-white p-4 shadow-md">
      <CardHeader className="mb-4 flex items-center justify-between">
        <div className="flex items-center justify-start">
          <CardTitle className="text-xl font-bold">Events Triggered</CardTitle>
        </div>
        <div className="flex items-center">
          <span className="mr-4 text-sm font-medium text-gray-500">
            Production
          </span>
        </div>
      </CardHeader>
      <CardContent>
        {data.map((item, index) => (
          <div
            key={item.name}
            className="mb-2 flex items-center justify-between rounded-lg border"
            style={{ padding: "10px", borderColor: "#e2e8f0" }}
            onMouseEnter={() => setHovered(item.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex-1">
              <span className="text-lg font-semibold">{item.name}</span>
            </div>
            <div className="flex-1 text-right">
              <span className="text-lg text-gray-900">{item.value}</span>
            </div>
            <div className="flex-1 text-right">
              <span className="text-sm text-green-600">{item.change}</span>
            </div>
            <div className="flex-1">
              <div
                style={{ backgroundColor: item.color, width: item.barWidth }}
                className="h-2 rounded"
              ></div>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        {hovered && (
          <CardDescription className="text-sm">
            {hovered === "analytics" && (
              <div className="flex items-center pl-4">
                <span className="text-red-600">⚠</span>
                <span>{footerContent[hovered].label}</span>
                <span className="pl-4">{footerContent[hovered].time}</span>
              </div>
            )}
            {hovered === "emails" && (
              <div className="flex items-center pl-4">
                <span className="text-green-600">✓</span>
                <span>{footerContent[hovered].label}</span>
                <span className="pl-4">{footerContent[hovered].count}</span>
              </div>
            )}
          </CardDescription>
        )}
        {!hovered && (
          <CardDescription className="font-medium text-gray-800">
            Total Events Triggered: 35,968
          </CardDescription>
        )}
      </CardFooter>
    </Card>
  )
}

export default DynamicCardComponent

import React from "react"

import { Card } from "@/registry/default/ui/card"
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  Statistic,
} from "@/registry/default/ui/statistic"

function IncardStatistic() {
  const titleStyle = {
    marginTop: "10px",
    textAlign: "center",
    marginBottom: "6px",
    color: "#333333",
    fontWeight: "bold",
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          flex: 1,
          marginRight: "10px",
          marginLeft: "-10px",
          marginTop: "10px",
        }}
      >
        <Card style={{ width: "180px", height: "95px" }}>
          <div
            style={{
              marginTop: "10px",
              textAlign: "center",
              marginBottom: "6px",
              color: "#333333",
              fontWeight: "bold",
              marginLeft: "-100px",
            }}
          >
            {" "}
            Active
          </div>
          <Statistic
            value={11.28}
            precision={2}
            valueStyle={{ color: "#347300" }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </div>
      <div style={{ flex: 1, marginTop: "10px" }}>
        <Card style={{ width: "180px", height: "95px" }}>
          <div
            style={{
              marginTop: "10px",
              textAlign: "center",
              marginBottom: "6px",
              color: "#333333",
              fontWeight: "bold",
              marginLeft: "-120px",
            }}
          >
            Idle
          </div>
          <Statistic
            value={9.3}
            precision={2}
            valueStyle={{ color: "#a10f00" }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      </div>
    </div>
  )
}

export default IncardStatistic

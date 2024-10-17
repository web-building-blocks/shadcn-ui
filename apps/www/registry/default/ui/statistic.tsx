import React from "react"

// 定义 Props 类型
interface StatisticProps {
  title: string
  value: number
  precision?: number
  loading: boolean
  valueStyle?: React.CSSProperties
  prefix?: React.ReactNode
  suffix?: React.ReactNode
}

const Statistic: React.FC<StatisticProps> = (props) => {
  const { title, value, precision, loading, valueStyle, prefix, suffix } = props
  return (
    <div>
      <h3>{title}</h3>
      {loading ? (
        <div
          style={{
            width: "50%",
            height: "10px",
            backgroundColor: "#ddd",
            borderRadius: "4px",
          }}
        />
      ) : (
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#000",
            ...valueStyle,
            display: "flex",
          }}
        >
          {prefix && prefix}
          {precision !== undefined ? value.toFixed(precision) : value}
          {suffix && suffix}
        </div>
      )}
    </div>
  )
}

const ArrowUpOutlined: React.FC = () => (
  <svg
    viewBox="64 64 896 896"
    focusable="false"
    data-icon="arrow-up"
    width="2em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M528 372v479h-80V372L288.8 516.8l-22.4-22.4L512 290.4l245.6 204z"></path>
  </svg>
)

const ArrowDownOutlined: React.FC = () => (
  <svg
    viewBox="64 64 896 896"
    focusable="false"
    data-icon="arrow-down"
    width="2em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M528 672V193h-80v479L288.8 537.2l-22.4 22.4L512 757.6l245.6-204z"></path>
  </svg>
)

export { Statistic, ArrowDownOutlined, ArrowUpOutlined }

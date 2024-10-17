import React, { useEffect, useState } from "react"
import { differenceInMilliseconds, intervalToDuration } from "date-fns"

import { Button } from "@/registry/default/ui/button"

export const Countdown = () => {
  const [targetDate, setTargetDate] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("targetDate") || new Date().toISOString()
    } else {
      return new Date().toISOString()
    }
  })

  const resetTimer = () => {
    const newTargetDate = new Date()
    newTargetDate.setDate(newTargetDate.getDate() + 2)
    setTargetDate(newTargetDate.toISOString())
    if (typeof window !== "undefined") {
      localStorage.setItem("targetDate", newTargetDate.toISOString())
    }
  }

  useEffect(() => {
    resetTimer()
  }, [])

  const calculateTimeLeft = () => {
    const difference = differenceInMilliseconds(
      new Date(targetDate),
      new Date()
    )
    const { days, hours, minutes, seconds } = intervalToDuration({
      start: 0,
      end: difference,
    })
    return {
      days,
      hours,
      minutes,
      seconds,
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearTimeout(timer)
  })

  const { days, hours, minutes, seconds } = timeLeft

  return (
    <div>
      {Object.keys(timeLeft).length === 0 ? (
        <span>Time out!</span>
      ) : (
        <div>
          <span style={{ fontSize: "27px", fontWeight: "bold" }}>
            {days !== undefined ? days : 0}天{" "}
          </span>
          <span style={{ fontSize: "27px", fontWeight: "bold" }}>
            {hours !== undefined ? hours : 0}时{" "}
          </span>
          <span style={{ fontSize: "27px", fontWeight: "bold" }}>
            {minutes !== undefined ? minutes : 0}分{" "}
          </span>
          <span style={{ fontSize: "27px", fontWeight: "bold" }}>
            {seconds !== undefined ? seconds : 0}秒
          </span>
          <br />
          <Button onClick={resetTimer}>Reset </Button>
        </div>
      )}
    </div>
  )
}

export const Scountdown = () => {
  const [targetDate, setTargetDate] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("targetDate") || new Date().toISOString()
    } else {
      return new Date().toISOString()
    }
  })

  const resetTimer = () => {
    const newTargetDate = new Date()
    newTargetDate.setDate(newTargetDate.getDate() + 2)
    setTargetDate(newTargetDate.toISOString())
    if (typeof window !== "undefined") {
      localStorage.setItem("targetDate", newTargetDate.toISOString())
    }
  }

  useEffect(() => {
    resetTimer()
  }, [])

  const calculateTimeLeft = () => {
    const difference = differenceInMilliseconds(
      new Date(targetDate),
      new Date()
    )
    const { days, hours, minutes, seconds } = intervalToDuration({
      start: 0,
      end: difference,
    })
    return {
      days,
      hours,
      minutes,
      seconds,
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearTimeout(timer)
  })

  const { days, hours, minutes, seconds } = timeLeft

  return (
    <div>
      {Object.keys(timeLeft).length === 0 ? (
        <span>Time out!</span>
      ) : (
        <div>
          <span style={{ fontSize: "27px", fontWeight: "bold" }}>
            {hours !== undefined && hours < 10
              ? `0${hours}`
              : hours !== undefined
              ? hours
              : 0}
          </span>
          :
          <span style={{ fontSize: "27px", fontWeight: "bold" }}>
            {minutes !== undefined && minutes < 10
              ? `0${minutes}`
              : minutes !== undefined
              ? minutes
              : 0}
          </span>
          :
          <span style={{ fontSize: "27px", fontWeight: "bold" }}>
            {seconds !== undefined && seconds < 10
              ? `0${seconds}`
              : seconds !== undefined
              ? seconds
              : 0}
          </span>
          <br />
          <Button onClick={resetTimer}>Reset </Button>
        </div>
      )}
    </div>
  )
}

export default { Countdown, Scountdown }

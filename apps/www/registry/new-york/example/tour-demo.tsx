import React, { useRef, useState } from "react"

import { Button } from "@/registry/default/ui/button"
import { CardContent, CardHeader, CardTitle } from "@/registry/default/ui/card"
import Overlay from "@/registry/default/ui/overlay"

interface TourComponentProps {
  overlayProps: {
    isOpen: boolean
    usePortal: boolean
    hasBackdrop: boolean
    unmountOnExit: boolean
    transitionName: string
    className: string
    style: React.CSSProperties
  }
  cardTitle: string
  steps: Array<{
    title: string
    description: string
    target: React.RefObject<HTMLElement>
  }>
  buttonNames: { begin: string; upload: string; save: string; others: string }
}

const TourComponent: React.FC<TourComponentProps> = ({
  overlayProps,
  cardTitle,
  steps,
  buttonNames,
}) => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const [tourStep, setTourStep] = useState(0)
  const [isTourActive, setIsTourActive] = useState(false)

  const stepRefs = [ref1, ref2, ref3]

  const handleNext = () => {
    setTourStep((prev) => (prev < steps.length ? prev + 1 : 0))
  }

  const handlePrevious = () => {
    setTourStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))
  }

  const handleFinish = () => {
    setTourStep(0)
    setIsTourActive(false)
  }

  const beginTour = () => {
    setIsTourActive(true)
    setTourStep(1)
  }

  // 根据当前步骤计算弹出框的位置
  const getTourPopupPosition = () => {
    if (tourStep > 0 && steps[tourStep - 1].target?.current) {
      const rect = steps[tourStep - 1].target.current.getBoundingClientRect() // 使用可选链
      return {
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX,
      }
    }
    return { top: 0, left: 0 }
  }

  const { top, left } = getTourPopupPosition()

  return (
    <div className="p-4 relative">
      <div className="w-full p-4 border rounded-lg shadow-lg">
        <CardHeader>
          <CardTitle>{cardTitle}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex">
            <Button onClick={beginTour} className="w-full">
              {buttonNames.begin}
            </Button>
          </div>
          <div className="flex gap-3">
            <Button
              ref={ref1}
              style={
                tourStep === 1
                  ? { backgroundColor: "#E2573E", zIndex: 1050 }
                  : {}
              }
            >
              {buttonNames.upload}
            </Button>
            <Button
              ref={ref2}
              style={
                tourStep === 2
                  ? { backgroundColor: "#E2573E", zIndex: 1050 }
                  : {}
              }
            >
              {buttonNames.save}
            </Button>
            <Button
              ref={ref3}
              style={
                tourStep === 3
                  ? { backgroundColor: "#E2573E", zIndex: 1050 }
                  : {}
              }
            >
              {buttonNames.others}
            </Button>
          </div>
        </CardContent>
      </div>

      {isTourActive && (
        <>
          {/* Full screen overlay to darken the rest of the screen */}
          <div className="fixed inset-0 bg-black opacity-50 z-1000"></div>

          {/* Position the tour overlay */}
          <Overlay
            {...overlayProps}
            className={overlayProps.className}
            style={{ ...overlayProps.style, top, left }}
          >
            <div className="p-4">
              <h3 className="text-lg font-bold">{steps[tourStep - 1].title}</h3>
              <p>{steps[tourStep - 1].description}</p>
              <div className="flex justify-between mt-4">
                {tourStep > 1 && (
                  <Button onClick={handlePrevious}>Previous</Button>
                )}
                {tourStep < steps.length && (
                  <Button onClick={handleNext}>Next</Button>
                )}
                {tourStep === steps.length && (
                  <Button onClick={handleFinish}>Finish</Button>
                )}
              </div>
            </div>
          </Overlay>
        </>
      )}
    </div>
  )
}

export default TourComponent

import React, { cloneElement, useEffect, useRef, useState } from "react"
import ReactDOM from "react-dom"
import { CSSTransition } from "react-transition-group"
import { TransitionProps } from "react-transition-group/Transition"

export interface OverlayProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<TransitionProps, "timeout"> {
  timeout?: TransitionProps["timeout"]
  isOpen?: boolean
  usePortal?: boolean
  maskClosable?: boolean
  dialogProps?: React.HTMLProps<HTMLElement>
  backdropProps?: React.HTMLProps<HTMLDivElement>
  hasBackdrop?: boolean
  unmountOnExit?: boolean
  transitionName?: string
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void
  onOpening?: (node: HTMLElement, isAppearing: boolean) => void
  onOpened?: (node: HTMLElement, isAppearing: boolean) => void
  onClosing?: (node: HTMLElement) => void
  onClosed?: (
    node: HTMLElement | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  onClose?: (evn: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const noop = () => {}

function isReactElement(child: any): child is React.ReactElement {
  return (
    child && typeof child === "object" && "type" in child && "props" in child
  )
}

export default function Overlay(props: OverlayProps) {
  const {
    className,
    style,
    isOpen: _ = false,
    prefixCls = "w-overlay",
    usePortal = true,
    maskClosable = true,
    backdropProps = {},
    hasBackdrop = true,
    unmountOnExit = true,
    timeout = 300,
    transitionName = "w-overlay",
    onOpening = noop,
    onOpened = noop,
    onClosing = noop,
    onClosed = noop,
    onClose = noop,
    onEnter = noop,
    onExiting = noop,
    onEntering = noop,
    onEntered = noop,
    onExit = noop,
    children,
    dialogProps = {},
    ...otherProps
  } = props

  const [isOpen, setIsOpen] = useState<boolean>()
  const [visible, setVisible] = useState(false)
  const container = useRef<HTMLDivElement>(null)
  const overlay = useRef(null)

  useEffect(() => {
    if (isOpen !== props.isOpen && props.isOpen) {
      setVisible(true)
    }
    if (isOpen !== props.isOpen && !props.isOpen) {
      overlayWillClose()
      setIsOpen(false)
    }
  }, [props.isOpen])

  useEffect(() => {
    if (visible) {
      overlayWillOpen()
      setIsOpen(true)
    }
  }, [visible])

  const decoratedChild = isReactElement(children) ? (
    cloneElement(children, {
      ...dialogProps,
      style: { ...children.props.style, ...dialogProps.style },
      className: [children.props.className, `${prefixCls}-content`]
        .filter(Boolean)
        .join(" ")
        .trim(),
      tabIndex: 0,
    })
  ) : (
    <span {...dialogProps} className={`${prefixCls}-content`}>
      {children}
    </span>
  )

  function handleClosed(
    node: HTMLElement | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setVisible(false)
    onClosed && onClosed(node)
  }

  function handleBackdropMouseDown(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    if (e.target !== container.current && usePortal) {
      return
    }
    if (maskClosable && hasBackdrop) {
      overlayWillClose()
      setIsOpen(false)
      onClose && onClose(e)
    }
    backdropProps && backdropProps.onMouseDown && backdropProps.onMouseDown(e)
  }

  function overlayWillOpen() {
    if (hasBackdrop && usePortal) {
      document.body.classList.add(`${prefixCls}-open`)
    }
  }

  function overlayWillClose() {
    if (hasBackdrop && usePortal) {
      document.body.classList.remove(`${prefixCls}-open`)
    }
  }

  const TransitionGroupComp = (
    <CSSTransition
      classNames={transitionName}
      unmountOnExit={unmountOnExit}
      timeout={timeout!}
      in={isOpen}
      onEnter={(isAppearing: boolean) => {
        onEnter(overlay.current!, isAppearing)
      }}
      onEntering={(isAppearing: boolean) => {
        onOpening(overlay.current!, isAppearing)
        onEntering(overlay.current!)
      }}
      onEntered={(isAppearing: boolean) => {
        onOpened(overlay.current!, isAppearing)
        onEntered(overlay.current!)
      }}
      onExiting={() => {
        onClosing(overlay.current!)
        onExiting(overlay.current!)
      }}
      onExited={() => {
        handleClosed(overlay.current!)
        onExit(overlay.current!)
      }}
      nodeRef={overlay}
      {...otherProps}
    >
      {(status: string) => (
        <div
          style={style}
          ref={overlay}
          className={[
            prefixCls,
            className,
            !usePortal ? `${prefixCls}-inline` : null,
            isOpen ? `${prefixCls}-enter-done` : null,
          ]
            .filter(Boolean)
            .join(" ")
            .trim()}
        >
          {hasBackdrop &&
            cloneElement(<div />, {
              ...backdropProps,
              onMouseDown: handleBackdropMouseDown,
              className: [`${prefixCls}-backdrop`, backdropProps.className]
                .filter(Boolean)
                .join(" ")
                .trim(),
              tabIndex: maskClosable ? 0 : null,
            })}
          {usePortal ? (
            <div
              ref={container}
              onMouseDown={handleBackdropMouseDown}
              className={`${prefixCls}-container`}
            >
              {cloneElement(decoratedChild, { "data-status": status })}
            </div>
          ) : (
            cloneElement(decoratedChild, { "data-status": status })
          )}
        </div>
      )}
    </CSSTransition>
  )

  if (visible && usePortal) {
    return ReactDOM.createPortal(TransitionGroupComp, document.body)
  } else {
    return TransitionGroupComp
  }
}

import * as React from "react"
// Import framer-motion
import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
  RocketIcon,
} from "@radix-ui/react-icons"
import { motion } from "framer-motion"
import { AlertCircle, Terminal } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/registry/sydney/ui/alert"


const variantAnimations = {
  default: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  destructive: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
  information: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
  warning: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
  success: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  },
}

export default function AlertAnimation() {
  return (
    <div style={{ width: "500px" }}>
      <motion.div
        initial="initial"
        animate="animate"
        variants={variantAnimations.default}
      >
        <Alert>
          <RocketIcon className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
        </Alert>
      </motion.div>
      <br />

      <motion.div
        initial="initial"
        animate="animate"
        variants={variantAnimations.success}
      >
        <Alert variant="success">
          <CheckCircledIcon className="h-4 w-4" />
          <AlertTitle>Successful alert</AlertTitle>
        </Alert>
      </motion.div>
      <br />

      <motion.div
        initial="initial"
        animate="animate"
        variants={variantAnimations.information}
      >
        <Alert variant="information">
          <InfoCircledIcon className="h-4 w-4" />
          <AlertTitle>Information alert</AlertTitle>
        </Alert>
      </motion.div>
      <br />

      <motion.div
        initial="initial"
        animate="animate"
        variants={variantAnimations.warning}
      >
        <Alert variant="warning">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Warning alert</AlertTitle>
        </Alert>
      </motion.div>
      <br />

      <motion.div
        initial="initial"
        animate="animate"
        variants={variantAnimations.destructive}
      >
        <Alert variant="destructive">
          <CrossCircledIcon className="h-4 w-4" />
          <AlertTitle>Error alert</AlertTitle>
        </Alert>
      </motion.div>
    </div>
  )
}

import { Alert, AlertDescription, AlertTitle } from "@/registry/UNSW/ui/alert"

export default function Example() {
  return (
    <Alert>
      <AlertTitle>⚠ Warning!</AlertTitle>
      <AlertDescription>
        This alert now uses UNSW's Clancy font with a fallback to Roboto Mono.
      </AlertDescription>
    </Alert>
  )
}

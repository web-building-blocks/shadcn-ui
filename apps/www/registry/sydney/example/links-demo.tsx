import { Button } from "@/registry/sydney/ui/button"

export function EnhancedLink() {
  return (
    <Button asChild >
      <a href="https://www.sydney.edu.au/" className="bg-usydOrange hover:bg-usydOrangeDark">Read More →</a>
    </Button>
  )
}

export default EnhancedLink

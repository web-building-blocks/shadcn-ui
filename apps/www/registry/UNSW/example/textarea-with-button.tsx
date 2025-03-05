import { Button } from "@/registry/UNSW/ui/button"
import { Textarea } from "@/registry/UNSW/ui/textarea"

export default function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}

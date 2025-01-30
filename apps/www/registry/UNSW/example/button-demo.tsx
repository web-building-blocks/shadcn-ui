import { Button } from "@/registry/UNSW/ui/button"
import { ToastAction } from "@/registry/UNSW/ui/toast"
import { Toaster } from "@/registry/UNSW/ui/toaster"
import { useToast } from "@/registry/UNSW/ui/use-toast"

export function ButtonDemo() {
  const { toast } = useToast()

  return (
    <>
      <Toaster />
      <Button
        variant="outline"
        onClick={() => {
          toast({
            description: "Button clicked!",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          })
        }}
      >
        Button
      </Button>
    </>
  )
}
export default ButtonDemo

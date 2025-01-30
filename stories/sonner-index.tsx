"use client";

import { useState } from "react";
import { toast, Toaster as Sonner } from "sonner";
import { Button } from "@/registry/default/ui/button";

type ToasterProps = React.ComponentProps<typeof Sonner>;

export const ToasterDemo = ({ ...props }: ToasterProps) => {
  const [toastCount, setToastCount] = useState(0);

  const handleShowToast = () => {
    setToastCount((prev) => prev + 1);
    toast(`Toast #${toastCount + 1} created`, {
      description: `This is toast number ${toastCount + 1}`,
      action: {
        label: "Undo",
        onClick: () => console.log("Undo action triggered for Toast #", toastCount + 1),
      },
    });
  };

  return (
    <div>
      <Sonner {...props} />
      <Button variant="outline" onClick={handleShowToast}>
        Show Toast
      </Button>
    </div>
  );
};

export default ToasterDemo;

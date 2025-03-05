import { CalendarDays } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/UNSW/ui/avatar"
import { Button } from "@/registry/UNSW/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/UNSW/ui/hover-card"

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="text-[#181716]">
          {" "}
          {/* Text color set to darker yellow text */}
          @nextjs
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4 rounded-none">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback className="bg-[#FFDC00] text-white">
              {" "}
              {/* UNSW yellow background for fallback */}
              VC
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-yellow-500">@nextjs</h4>{" "}
            {/* Text color set to UNSW dark text */}
            <p className="text-sm text-[#181716]">
              {" "}
              {/* Text color set to UNSW dark text */}
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2 text-yellow-500">
              {" "}
              {/* Text color set to darker yellow */}
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-yellow-500">
                {" "}
                {/* Text color set to darker yellow */}
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

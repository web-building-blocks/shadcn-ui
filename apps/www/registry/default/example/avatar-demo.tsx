// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from "@/registry/default/ui/avatar"
//
// export default function AvatarDemo() {
//   return (
//     <Avatar>
//       <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
//       <AvatarFallback>CN</AvatarFallback>
//     </Avatar>
//   )
// }

import React from "react"
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"

export function AvatarDemo() {
  const openGitHub = () => {
    window.open(
      "https://github.com/Programming-is-like-breathing-air",
      "_blank"
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div style={{ cursor: "pointer" }}>
          <Avatar style={{ width: "50px", height: "50px" }}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72">
        <DropdownMenuLabel>
          Mariana Castilho
          <br /> notmyreal@email.com{" "}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard className="mr-2 h-4 w-4" />
          <span>Billing</span>
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Users className="mr-2 h-4 w-4" />
          <span>Team</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Plus className="mr-2 h-4 w-4" />
          <span>New Team</span>
          <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={openGitHub}>
          <Github className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem style={{ color: "#EF4444" }}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AvatarDemo

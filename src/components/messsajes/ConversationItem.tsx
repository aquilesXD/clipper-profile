"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ConversationItemProps {
  id: string
  name: string
  avatar?: string
  lastMessage?: string
  timestamp?: string
  unread?: boolean
  isActive: boolean
  onClick: () => void
}

export function ConversationItem({
  name,
  avatar,
  lastMessage,
  timestamp,
  unread,
  isActive,
  onClick,
}: ConversationItemProps) {
  return (
    <div
      className={`flex items-center p-3 cursor-pointer ${isActive ? "bg-[#1a1a1a]" : "hover:bg-[#1a1a1a]"}`}
      onClick={onClick}
    >
      <Avatar className="h-10 w-10 mr-3">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback className="bg-[#333]">{name.charAt(0)}</AvatarFallback>
      </Avatar>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-white truncate">{name}</h3>
          {timestamp && <span className="text-xs text-gray-400">{timestamp}</span>}
        </div>

        {lastMessage && (
          <div className="flex items-center">
            <p className={`text-sm truncate ${unread ? "text-white font-medium" : "text-gray-400"}`}>{lastMessage}</p>
            {unread && <div className="ml-2 w-2 h-2 rounded-full bg-blue-500"></div>}
          </div>
        )}
      </div>
    </div>
  )
}


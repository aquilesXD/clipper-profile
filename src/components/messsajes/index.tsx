"use client"


import { useState } from "react"
import { MessagesSidebar } from "./MessagesSidebar"
import { MessagesContent } from "./MessagesContent"
import Sidebar from "../layout/Sidebar"


export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null)

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Main Sidebar */}
      <Sidebar />

      {/* Messages Interface */}
      <div className="flex flex-1 ml-16">
        {/* Messages Sidebar */}
        <MessagesSidebar selectedConversation={selectedConversation} onSelectConversation={setSelectedConversation} />

        {/* Messages Content */}
        <MessagesContent selectedConversation={selectedConversation} />
      </div>
    </div>
  )
}


"use client"
import { useParams, useNavigate } from "react-router-dom"

import { MessagesSidebar } from "./MessagesSidebar"
import { MessagesContent } from "./MessagesContent"
import Sidebar from "../layout/Sidebar"


export default function MessageConversation() {
  const { conversationId } = useParams<{ conversationId: string }>()
  const navigate = useNavigate()

  // En una aplicación real, aquí cargarías los datos de la conversación
  // basándote en el conversationId

  const handleSelectConversation = (id: string | null) => {
    if (id) {
      navigate(`/messages/${id}`)
    } else {
      navigate("/messages")
    }
  }

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Main Sidebar */}
      <Sidebar />

      {/* Messages Interface */}
      <div className="flex flex-1 ml-16">
        {/* Messages Sidebar */}
        <MessagesSidebar
          selectedConversation={conversationId || null}
          onSelectConversation={handleSelectConversation}
        />

        {/* Messages Content */}
        <MessagesContent selectedConversation={conversationId || null} />
      </div>
    </div>
  )
}


"use client"

import { useState } from "react"
import { Search, Edit } from "lucide-react"
import { NewMessageModal } from "./NewMessageModal"

interface MessagesSidebarProps {
  selectedConversation: string | null
  onSelectConversation: (id: string | null) => void
}

export function MessagesSidebar({ selectedConversation, onSelectConversation }: MessagesSidebarProps) {
  const [activeTab, setActiveTab] = useState<"unread" | "groups" | "requests">("unread")
  const [searchQuery, setSearchQuery] = useState("")
  const [isNewMessageModalOpen, setIsNewMessageModalOpen] = useState(false)

  // This would normally come from an API or state management
  const conversations: any[] = []

  const tabs = [
    { id: "unread", label: "Unread" },
    { id: "groups", label: "Groups" },
    { id: "requests", label: "Requests" },
  ] as const

  const handleStartConversation = (userId: string) => {
    // In a real app, this would create a new conversation or navigate to an existing one
    onSelectConversation(userId)
  }

  const handleCreateGroupChat = () => {
    // This would open a group creation flow in a real app
    console.log("Create group chat")
    setIsNewMessageModalOpen(false)
  }

  return (
    <div className="w-full max-w-sm border-r border-[#222222] bg-[#121212] flex flex-col">
      {/* Search and New Message */}
      <div className="p-4 flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-[#1a1a1a] border-none rounded-md py-2 pl-10 pr-4 text-white text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="p-2 text-gray-400 hover:text-white" onClick={() => setIsNewMessageModalOpen(true)}>
          <Edit className="h-5 w-5" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex px-4 gap-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-1.5 px-4 text-sm font-medium rounded-full ${
              activeTab === tab.id ? "bg-[#1d4ed8] text-white" : "bg-[#1a1a1a] text-gray-300 hover:text-white"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Conversation List or Empty State */}
      <div className="flex-1 overflow-y-auto">
        {conversations.length > 0 ? (
          <div className="py-2">
            {conversations.map((conversation) => (
              <div key={conversation.id} className="px-4 py-3 hover:bg-[#1a1a1a] cursor-pointer">
                {/* Conversation item */}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center p-4">
            <div className="w-16 h-16 bg-[#2a2a2a] rounded-full flex items-center justify-center mb-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
                  fill="#333333"
                />
              </svg>
            </div>

            {activeTab === "unread" && (
              <>
                <h3 className="text-xl font-semibold text-white mb-1">No unread messages</h3>
                <p className="text-gray-400 mb-6">You are all caught up!</p>
              </>
            )}

            {activeTab === "groups" && (
              <>
                <h3 className="text-xl font-semibold text-white mb-1">No groups</h3>
                <p className="text-gray-400 mb-6">You are not in any groups yet.</p>
              </>
            )}

            {activeTab === "requests" && (
              <>
                <h3 className="text-xl font-semibold text-white mb-1">No requests</h3>
                <p className="text-gray-400 mb-6">You don't have any message requests.</p>
              </>
            )}

            <button
              className="bg-[#1d4ed8] hover:bg-blue-700 text-white py-2 px-4 rounded-full text-sm font-medium w-full max-w-xs"
              onClick={() => {
                console.log("Opening modal from Search for a user button")
                setIsNewMessageModalOpen(true)
              }}
            >
              Search for a user
            </button>
          </div>
        )}
      </div>

      {/* New Message Modal */}
      <NewMessageModal
        isOpen={isNewMessageModalOpen}
        onClose={() => {
          console.log("Closing modal")
          setIsNewMessageModalOpen(false)
        }}
        onStartConversation={handleStartConversation}
        onCreateGroupChat={handleCreateGroupChat}
      />
    </div>
  )
}


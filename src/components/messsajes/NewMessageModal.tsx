"use client"

import { useState, useRef, useEffect } from "react"
import { Users, ChevronRight } from "lucide-react"

interface NewMessageModalProps {
  isOpen: boolean
  onClose: () => void
  onStartConversation: (userId: string) => void
  onCreateGroupChat?: () => void
}

export function NewMessageModal({ isOpen, onClose, onStartConversation, onCreateGroupChat }: NewMessageModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const modalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Mock suggested users data - would come from API in real app
  const suggestedUsers = [
    {
      id: "1",
      name: "Map Academy",
      username: "@mapacademy",
      avatar: "/placeholder.svg?height=40&width=40",
      isOrganization: true,
    },
    {
      id: "2",
      name: "Rezz",
      username: "@rezzashahabzadeh",
      avatar:
        "https://img-v2-prod.whop.com/ZNfyn20I686dk7hG_ol4kKA8F06b451-f4K3x-lpQFw/rs:fill:80:80/el:1/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAxLTI4L3VzZXJfMjc3MzQ5NF8yMmIyYTljYi03ODZjLTRmMGUtOTc2NC0xNTQyMTczMDJlM2EuanBlZw",
    },
  ]

  // Filter users based on search query
  const filteredUsers = searchQuery
    ? suggestedUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.username.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : suggestedUsers

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  // If isOpen is false, don't render anything
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div
        ref={modalRef}
        className="bg-[#121212] rounded-xl w-full max-w-[400px] h-[600px] overflow-hidden flex flex-col"
      >
        <div className="p-5">
          <h2 className="text-xl font-bold text-white mb-5">New message</h2>

          <div className="mb-4">
            <div className="flex items-center bg-[#1a1a1a] border border-[#333] rounded-md px-3 py-2.5">
              <span className="text-gray-400 mr-2">To:</span>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search users"
                className="flex-1 bg-transparent border-none outline-none text-white text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div
            className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-md cursor-pointer mb-5"
            onClick={onCreateGroupChat}
          >
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#333] flex items-center justify-center mr-3">
                <Users className="h-4 w-4 text-white" />
              </div>
              <span className="text-white font-medium">Create a group chat</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>

          {filteredUsers.length > 0 && (
            <>
              <div className="mb-3">
                <h3 className="text-sm text-gray-400 font-medium">Suggested</h3>
              </div>

              <div className="space-y-3">
                {filteredUsers.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center p-2 hover:bg-[#1a1a1a] rounded-md cursor-pointer"
                    onClick={() => {
                      onStartConversation(user.id)
                      onClose()
                    }}
                  >
                    <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                      {user.isOrganization ? (
                        <div className="bg-[#1a1a1a] h-full w-full flex items-center justify-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2L2 7L12 12L22 7L12 2Z"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M2 17L12 22L22 17"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M2 12L12 17L22 12"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      ) : (
                        <img
                          src={user.avatar || "/placeholder.svg"}
                          alt={user.name}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-white">{user.name}</p>
                      <p className="text-sm text-gray-400">{user.username}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}


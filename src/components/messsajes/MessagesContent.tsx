"use client"

interface MessagesContentProps {
  selectedConversation: string | null
}

export function MessagesContent({ selectedConversation }: MessagesContentProps) {
  if (!selectedConversation) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#121212]">
        <div className="bg-[#1a1a1a] rounded-lg p-8 max-w-md text-center">
          <h2 className="text-xl font-semibold text-white mb-2">Select a message</h2>
          <p className="text-gray-400 mb-6">
            Choose from your existing conversations, start a new one, or just keep swimming.
          </p>
          <div className="flex justify-center">
            <div className="flex items-center justify-center">
              {/* Eyes illustration */}
              <div className="w-12 h-12 bg-[#2a2a2a] rounded-full flex items-center justify-center mr-1">
                <div className="w-4 h-4 bg-white rounded-full relative right-1 bottom-0"></div>
              </div>
              <div className="w-12 h-12 bg-[#2a2a2a] rounded-full flex items-center justify-center ml-1">
                <div className="w-4 h-4 bg-white rounded-full relative left-1 bottom-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col bg-[#121212]">
      {/* Conversation Header */}
      <div className="p-4 border-b border-[#222222]">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-[#1a1a1a] rounded-full mr-3"></div>
          <div>
            <h3 className="font-medium text-white">Conversation Name</h3>
            <p className="text-xs text-gray-400">Active now</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4">{/* Messages would go here */}</div>

      {/* Message Input */}
      <div className="p-4 border-t border-[#222222]">
        <div className="flex items-center bg-[#1a1a1a] rounded-lg p-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-transparent border-none outline-none text-white"
          />
          <button className="ml-2 text-blue-500 font-medium">Send</button>
        </div>
      </div>
    </div>
  )
}


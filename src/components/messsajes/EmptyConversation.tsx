"use client"

interface EmptyConversationProps {
  name: string
}

export function EmptyConversation({ name }: EmptyConversationProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
      <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-4">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
            fill="#333333"
          />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-white mb-1">No messages yet</h3>
      <p className="text-gray-400 mb-6">Start a conversation with {name}</p>
      <button className="bg-[#1d4ed8] hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium">
        Say Hello
      </button>
    </div>
  )
}


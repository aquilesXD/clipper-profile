"use client"

interface MessageBubbleProps {
  content: string
  timestamp: string
  isOwn: boolean
  status?: "sent" | "delivered" | "read"
}

export function MessageBubble({ content, timestamp, isOwn, status = "sent" }: MessageBubbleProps) {
  return (
    <div className={`flex mb-4 ${isOwn ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[70%] ${isOwn ? "bg-blue-600" : "bg-[#1a1a1a]"} rounded-2xl px-4 py-2`}>
        <p className="text-white">{content}</p>
        <div className="flex items-center justify-end mt-1">
          <span className="text-xs text-gray-300">{timestamp}</span>

          {isOwn && (
            <span className="ml-1 text-xs text-gray-300">
              {status === "read" && "✓✓"}
              {status === "delivered" && "✓✓"}
              {status === "sent" && "✓"}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}


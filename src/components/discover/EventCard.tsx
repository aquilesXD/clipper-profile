interface EventCardProps {
  event: {
    id: number
    title: string
    creator: string
    category: string
    date: string
    attendees: number
    avatar: string
    description?: string
    location?: string
    url?: string
    onlineCount: number
    isLive?: boolean
  }
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] overflow-hidden hover:border-[#3a3a3a] transition-colors">
      <div className="p-4">
        <div className="flex items-start mb-2">
          <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden mr-2 bg-[#252525] flex items-center justify-center">
            {event.avatar ? (
              <img
                src={event.avatar || "/placeholder.svg"}
                alt={event.creator}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-white text-xs">{event.creator.charAt(0)}</span>
            )}
          </div>
          <div>
            <p className="text-sm font-medium text-white">{event.category}</p>
            <p className="text-xs text-gray-400">{event.creator}</p>
          </div>
        </div>

        <h3 className="text-white font-bold mb-2">{event.title}</h3>

        {event.description && <p className="text-gray-300 text-sm mb-3 line-clamp-3">{event.description}</p>}

        <div className="flex items-center text-gray-400 text-sm mb-2">
          <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span>{event.date}</span>
        </div>

        {event.location && (
          <div className="flex items-center text-gray-400 text-sm mb-2">
            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{event.location}</span>
          </div>
        )}

        {event.url && (
          <div className="flex items-center text-gray-400 text-sm mb-2">
            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 13C10.4295 13.5741 10.9774 14.0492 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6467 14.9923C14.3618 15.0435 15.0796 14.9404 15.7513 14.6898C16.4231 14.4392 17.0331 14.0471 17.54 13.54L20.54 10.54C21.4508 9.59699 21.9548 8.33397 21.9434 7.02299C21.932 5.71201 21.4061 4.45794 20.4791 3.5309C19.5521 2.60386 18.298 2.07802 16.987 2.06663C15.676 2.05523 14.413 2.55921 13.47 3.47L11.75 5.18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 11C13.5705 10.4259 13.0226 9.95083 12.3934 9.60706C11.7642 9.26329 11.0684 9.05886 10.3533 9.00768C9.63816 8.95649 8.92037 9.05961 8.24861 9.31017C7.57685 9.56073 6.96689 9.95286 6.45996 10.46L3.45996 13.46C2.54917 14.403 2.04519 15.666 2.05659 16.977C2.06798 18.288 2.59382 19.5421 3.52086 20.4691C4.4479 21.3961 5.70197 21.922 7.01295 21.9334C8.32393 21.9448 9.58695 21.4408 10.53 20.53L12.24 18.82"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="truncate">{event.url}</span>
          </div>
        )}

        <div className="flex items-center">
          <div className="flex items-center">
            <svg
              className="h-4 w-4 mr-1 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 20C18 17.7909 15.3137 16 12 16C8.68629 16 6 17.7909 6 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs text-gray-400">{event.attendees} la gente asiste</span>
          </div>
          <div className="ml-auto text-xs text-gray-400">{event.onlineCount} online</div>
        </div>

        {event.isLive && (
          <div className="mt-2">
            <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded">🔴 LIVE</span>
          </div>
        )}
      </div>
    </div>
  )
}


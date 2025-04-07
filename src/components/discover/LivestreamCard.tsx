interface LivestreamCardProps {
  stream: {
    id: number
    title: string
    creator: string
    logo: string
    thumbnail: string
    duration: string
    viewers: number
    isLive: boolean
  }
}

export function LivestreamCard({ stream }: LivestreamCardProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-2">
        <div className="h-6 w-6 rounded-full overflow-hidden mr-2 bg-[#252525] flex-shrink-0">
          <img src={stream.logo || "/placeholder.svg"} alt={stream.creator} className="h-full w-full object-cover" />
        </div>
        <span className="text-white text-sm font-medium mr-2 truncate">{stream.creator}</span>
        <span className="bg-red-600 text-white text-xs px-1.5 py-0.5 rounded text-[10px] font-bold">LIVE</span>
      </div>

      <div className="relative mb-2">
        <div className="aspect-video w-full bg-[#0f0f0f] overflow-hidden rounded-md">
          <img
            src={stream.thumbnail || "/placeholder.svg"}
            alt={`${stream.title} thumbnail`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
          {stream.duration}
        </div>

        {stream.title && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
            <h3 className="text-white text-sm font-medium truncate">{stream.title}</h3>
          </div>
        )}
      </div>

      <div className="flex items-center">
        <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
        <span className="text-xs text-gray-400">{stream.viewers} online</span>
      </div>
    </div>
  )
}


"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function AllStreamsView() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 15

  // Sample live streams data - expanded with more entries
  const allStreams = [
    {
      id: 1,
      title: "Options Insider Premium",
      creator: "Options Trading Pro",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "01:56:35",
      viewers: 443,
      isLive: true,
      category: "options",
      description: "04/08 | Live Trading | Are The Bulls Back?",
    },
    {
      id: 2,
      title: "PlayBit Free Live Trading",
      creator: "PlayBit Trading",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "01:49:47",
      viewers: 249,
      isLive: true,
      category: "crypto",
      description: "Free Live Trading NQ 75% Win Rate - 1000's of Traders Funded",
    },
    {
      id: 3,
      title: "Stock Hours Signals Chat",
      creator: "Stock Hours",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "02:01:09",
      viewers: 184,
      isLive: true,
      category: "stocks",
      description: "Trading Live 🔴",
    },
    {
      id: 4,
      title: "VIP Trader Access",
      creator: "VIP Trading",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "01:38:01",
      viewers: 46,
      isLive: true,
      category: "forex",
      description: "4/8 LIVE",
    },
    {
      id: 5,
      title: "Mr Top Hat FREE",
      creator: "Top Hat Trading",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "01:27:39",
      viewers: 15,
      isLive: true,
      category: "stocks",
      description: "MQSP with TOP HAT",
    },
    {
      id: 6,
      title: "New Age Trading Premium",
      creator: "New Age Trading",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "01:34:13",
      viewers: 20,
      isLive: true,
      category: "crypto",
      description: "Live Trading",
    },
    {
      id: 7,
      title: "Trade With Insight - Free",
      creator: "Trade Insight",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "01:57:12",
      viewers: 27,
      isLive: true,
      category: "forex",
      description: "Live Trading Stream!",
    },
    {
      id: 8,
      title: "Bitrade Premium Academy",
      creator: "Bitrade Academy",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "02:12:06",
      viewers: 6,
      isLive: true,
      category: "crypto",
      description: "ליין מסחר מושקע",
    },
    {
      id: 9,
      title: "BTA Premium",
      creator: "BTA Trading",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "02:52:58",
      viewers: 47,
      isLive: true,
      category: "stocks",
      description: "Live Trading!",
    },
    {
      id: 10,
      title: "Premiere Access",
      creator: "Premium Trading",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "01:26:28",
      viewers: 18,
      isLive: true,
      category: "options",
      description: "April 8 Market open",
    },
    {
      id: 11,
      title: "Trading en Vivo",
      creator: "Trading Latino",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "01:35:34",
      viewers: 5,
      isLive: true,
      category: "stocks",
      description: "Sala de Trading en vivo 8 de abril 2025 - Futuros Nasdaq y Russell",
    },
    {
      id: 12,
      title: "Honeycomb Options Trading",
      creator: "Honeycomb Trading",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "01:39:34",
      viewers: 2,
      isLive: true,
      category: "options",
      description: "Live Trading",
    },
    {
      id: 13,
      title: "Austin Clips",
      creator: "Austin Trading",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "01:49:25",
      viewers: 0,
      isLive: true,
      category: "stocks",
      description: "Market Analysis and Live Trading",
    },
    {
      id: 14,
      title: "Mind of Wealth Trading",
      creator: "Wealth Mindset",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "01:33:56",
      viewers: 0,
      isLive: true,
      category: "forex",
      description: "operando la cuenta live!!",
    },
    {
      id: 15,
      title: "Royalty FX Insight LLC",
      creator: "Royalty FX",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "21:47:37",
      viewers: 3,
      isLive: true,
      category: "forex",
      description: "GOLD -XAU",
    },
  ]

  // Pagination
  const totalPages = Math.ceil(allStreams.length / itemsPerPage)
  const currentItems = allStreams.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="w-full bg-[#121212]">
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="mr-3 text-gray-400 hover:text-white" aria-label="Go back">
            <ArrowLeft className="h-5 w-5" />
          </button>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-400">{allStreams.length} results</p>
        </div>
      </div>

      {/* Streams grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {currentItems.map((stream) => (
          <div key={stream.id} className="bg-[#121212] rounded-md overflow-hidden">
            <div className="relative">
              {/* Stream header with title and live badge */}
              <div className="absolute top-0 left-0 right-0 z-10 flex items-center p-2 bg-gradient-to-b from-black/80 to-transparent">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-[#333] rounded-md flex items-center justify-center text-white text-xs mr-2">
                    {stream.title.charAt(0)}
                  </div>
                  <span className="text-white text-xs font-medium truncate max-w-[120px]">{stream.title}</span>
                </div>
                <div className="ml-auto bg-red-600 text-white text-[10px] px-1 py-0.5 rounded">LIVE</div>
              </div>

              {/* Thumbnail */}
              <div className="aspect-video w-full bg-[#0f0f0f] overflow-hidden">
                <img
                  src={stream.thumbnail || "/placeholder.svg"}
                  alt={`${stream.title} thumbnail`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Duration */}
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                <span className="text-red-500 mr-1">●</span>
                {stream.duration}
              </div>
            </div>

            <div className="p-2">
              {/* Stream description */}
              <p className="text-white text-xs font-medium mb-1 line-clamp-1">{stream.description}</p>

              {/* Viewers count */}
              <div className="flex items-center text-green-500 text-xs">
                <span className="mr-1">●</span>
                <span>{stream.viewers} online</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

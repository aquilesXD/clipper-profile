"use client"

import { useState } from "react"
import { Star, ChevronRight, X } from "lucide-react"
import { ContentRewardCard } from "./ContentRewardCard"
import { Link } from "react-router-dom"

export function ExploreTab() {
  const [activeFilter, setActiveFilter] = useState<string>("trending")
  const [showAppNameModal, setShowAppNameModal] = useState(false)
  const [appName, setAppName] = useState("Evento")

  // Sample categories
  const categories = [
    { id: 1, name: "Creator", icon: "🎬", count: 1247 },
    { id: 2, name: "AI", icon: "🤖", count: 856 },
    { id: 3, name: "Education", icon: "📚", count: 743 },
    { id: 4, name: "Finance", icon: "💰", count: 612 },
    { id: 5, name: "Software", icon: "💻", count: 589 },
    { id: 6, name: "Community", icon: "👥", count: 421 },
  ]

  // Sample livestreams data
  const livestreams = [
    {
      id: 1,
      title: "Start your Whop. Make your Whop better, Get Feedback. Ask Questions",
      creator: "Whop University",
      logo: "https://img-v2-prod.whop.com/6h3sfg_FqzkV8VtmHQ41wHmNYgK6xQepCrUU9lSl0wI/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAyLTExL3VzZXJfMjE3MzE2OF85NTc2MmVhOS1kZjdhLTQ2OWItODE5YS1lZGI5NTcwZGMwYzguanBlZw",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "06:41:57",
      viewers: 14,
      isLive: true,
    },
    {
      id: 2,
      title: "Digital Business Networking",
      creator: "METAPRENEURSHIP",
      logo: "https://img-v2-prod.whop.com/t2nsZ2c5fWimGc7zTteuJKtcNJc0bkH-NYL4gQNNAd8/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAzLTA2L3VzZXJfMjE3MzE2OF9lM2E4OGQ5NC0wODAzLTQ3MzUtODY1Zi0yMmQ3MjFmNjJkZmMucG5n",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "03:13:51",
      viewers: 3,
      isLive: true,
    },
    {
      id: 3,
      title: "FN.MN.WZ what to play?",
      creator: "StreamHub",
      logo: "https://img-v2-prod.whop.com/LrJO0R8Ly5XoweQyp-sgHA7-85jzusXYEw8lbV0TEKs/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAxLTE0L3VzZXJfNjgzOTk4OV9iNzAxYjY2Ny01Mzk5LTQxY2ItYjg3My0wZTU4YTg0NGNmNTYucG5n",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "04:49:11",
      viewers: 2,
      isLive: true,
    },
    {
      id: 4,
      title: "Aftermarket Show",
      creator: "ADT FREE AREA",
      logo: "https://img-v2-prod.whop.com/2W74PpMmKbLVVK2y94JP_k_X6ofAypkP-uzdqd7uAxs/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTEwLTE2L3VzZXJfMzc4NzE0Nl9lNTQ3NDg0Ny0wNGI0LTQ0ZjYtOWRjNi0xNmE5MTUzN2RiNmUuanBlZw",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "16:48",
      viewers: 1,
      isLive: true,
    },
  ]

  // Sample content rewards data
  const contentRewards = [
    {
      id: 1,
      title: "Lil Tecca - Dark Thoughts",
      creator: "Lil Tecca",
      avatar:
        "https://img-v2-prod.whop.com/EhTD3HTOhvFW-9uGE5QhWuqVLyunKFvKdz-Tdt2cvnM/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAxLTExL3VzZXJfNjgzOTk4OV83YThkMTQ5NS01YzIxLTRhMzYtYmIxMC1mMzNlODIxNmZiMmEucG5n",
      rate: "0.60 US$ / 1 mil",
      paidAmount: "13,724.50 US$",
      totalAmount: "14,526.02 US$",
      percentage: 94,
      type: "Recorte",
      platforms: ["tiktok"],
      views: "42,734,634",
    },
    {
      id: 2,
      title: "Whop UGC (Faceless)",
      creator: "Whop UGC Creators",
      avatar:
        "https://img-v2-prod.whop.com/RZ8NrlZkDsIVv9iVU4zlsxxKti8Jbe4uEgVmwWbDSTs/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAxLTE2L3VzZXJfNjgzOTk4OV8xM2NhN2Q2Yy0yZjVjLTQyNWEtYWY4NC0xMzY0NGRjZjU1MGQuanBlZw",
      rate: "2.00 US$ / 1 mil",
      paidAmount: "12,331.30 US$",
      totalAmount: "16,000.00 US$",
      percentage: 77,
      type: "Sin rostro",
      platforms: ["instagram", "tiktok", "twitter"],
      views: "3,656,304",
    },
    {
      id: 3,
      title: "Dean Graziosi Clipping - 2$ per 1k Views",
      creator: "Graziosi Clips",
      avatar:
        "https://img-v2-prod.whop.com/_57AbOadxM5bdZJReazIUNHlzzntrlwsdgAdFs-x0Ms/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTEyLTMwL3VzZXJfNjgxMDYxOF81NDY5OTAzNS03ZTQyLTQzNWUtOWJhZC00ZTBhODIwMjdkZTIud2VicA",
      rate: "2.00 US$ / 1 mil",
      paidAmount: "9,685.07 US$",
      totalAmount: "10,000.00 US$",
      percentage: 97,
      type: "Recorte",
      platforms: ["instagram", "tiktok", "youtube"],
      views: "12,260,749",
    },
    {
      id: 4,
      title: "Tucker Carlson Podcast + News // $4 Per 1k Views",
      creator: "Autopilot Clips & UGC",
      avatar:
        "https://img-v2-prod.whop.com/LrJO0R8Ly5XoweQyp-sgHA7-85jzusXYEw8lbV0TEKs/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAxLTE0L3VzZXJfNjgzOTk4OV9iNzAxYjY2Ny01Mzk5LTQxY2ItYjg3My0wZTU4YTg0NGNmNTYucG5n",
      rate: "4.00 US$ / 1 mil",
      paidAmount: "8,298.56 US$",
      totalAmount: "9,837.14 US$",
      percentage: 84,
      type: "UGC",
      platforms: ["tiktok"],
      views: "1,712,336",
    },
  ]

  // Sample happening now data
  const happeningNow = [
    {
      id: 1,
      title: "HEAVY HITTERS 🏆 🏆 🏆 🏆",
      creator: "TMS Player Props #1",
      price: "$9.99 / week",
      avatar:
        "https://img-v2-prod.whop.com/kG597jx40jwdJaNX70kg4N0_2oG6cDSXrea-mYhmzy4/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAyLTI2L3VzZXJfNjMwOTk4NV8wYjAwMTMzNS02MjYyLTRhZTQtOGYzOC0wMzgxNWUyY2VmNjIucG5n",
      thumbnail: "/placeholder.svg?height=120&width=240",
      type: "chat",
      onlineUsers: 38,
      rating: 5,
      reviews: 793,
    },
    {
      id: 2,
      title: "TMS FREE CHAT",
      creator: "TMS FREE PLAYS 🎯",
      price: "Free",
      avatar:
        "https://img-v2-prod.whop.com/1mBXbNthOdI2DiLNZy6QbYpf4WdIpsjyzapcj-qxXRw/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTEyLTMxL3VzZXJfMTU4NzMwOF84NDU3MmY1NC0yMDMwLTQ1ZGItYTI1NS1kYTcyZTU1ZWJkNGYucG5n",
      thumbnail: "/placeholder.svg?height=120&width=240",
      type: "chat",
      onlineUsers: 46,
      rating: 5,
      reviews: 793,
    },
    {
      id: 3,
      title: "BEGINNERS TRADING COURSE",
      creator: "Crystal Academy Membership",
      price: "$50.00 / month",
      avatar:
        "https://img-v2-prod.whop.com/2W74PpMmKbLVVK2y94JP_k_X6ofAypkP-uzdqd7uAxs/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTEwLTE2L3VzZXJfMzc4NzE0Nl9lNTQ3NDg0Ny0wNGI0LTQ0ZjYtOWRjNi0xNmE5MTUzN2RiNmUuanBlZw",
      thumbnail: "/placeholder.svg?height=120&width=240",
      type: "course",
      onlineUsers: 25,
      rating: 5,
      reviews: 51,
      lessons: 14,
    },
    {
      id: 4,
      title: "Her Last Call",
      creator: "The Last Call Academy",
      price: "$49.00 / month",
      avatar:
        "https://img-v2-prod.whop.com/LrJO0R8Ly5XoweQyp-sgHA7-85jzusXYEw8lbV0TEKs/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAxLTE0L3VzZXJfNjgzOTk4OV9iNzAxYjY2Ny01Mzk5LTQxY2ItYjg3My0wZTU4YTg0NGNmNTYucG5n",
      thumbnail: "/placeholder.svg?height=120&width=240",
      type: "course",
      onlineUsers: 14,
      rating: 5,
      reviews: 26,
      lessons: 85,
    },
  ]

  // Update the upcomingEvents data to include more details
  const upcomingEvents = [
    {
      id: 1,
      title: "CURATING YOUR PERFECT OFFER I",
      creator: "Elite Coaching Academy",
      category: "Masterclasses",
      date: "Mar 27th 7:00 pm",
      attendees: 7,
      avatar:
        "https://img-v2-prod.whop.com/EhTD3HTOhvFW-9uGE5QhWuqVLyunKFvKdz-Tdt2cvnM/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAxLTExL3VzZXJfNjgzOTk4OV83YThkMTQ5NS01YzIxLTRhMzYtYmIxMC1mMzNlODIxNmZiMmEucG5n",
      description: "",
      onlineCount: 0,
    },
    {
      id: 2,
      title: "[Elite] Bob Van Buul - Iman Gadzhi",
      creator: "Burn the Boats Elite",
      category: "BTB Masterclass Calendar",
      date: "Mar 26th 11:00 am",
      attendees: 4,
      avatar:
        "https://img-v2-prod.whop.com/RZ8NrlZkDsIVv9iVU4zlsxxKti8Jbe4uEgVmwWbDSTs/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAxLTE2L3VzZXJfNjgzOTk4OV8xM2NhN2Q2Yy0yZjVjLTQyNWEtYWY4NC0xMzY0NGRjZjU1MGQuanBlZw",
      description:
        "Bob Van Buul with be coming into to drop itinerary tbc. But will involve secrets on how to go from 6 to 7 and then onto 8 figures. This is not to be missed.",
      onlineCount: 0,
    },
    {
      id: 3,
      title: "Amazon Mastery Training [Beginners]",
      creator: "Bronze Package",
      category: "Upcoming Calls",
      date: "Mar 26th 8:30 pm",
      attendees: 3,
      avatar:
        "https://img-v2-prod.whop.com/_57AbOadxM5bdZJReazIUNHlzzntrlwsdgAdFs-x0Ms/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTEyLTMwL3VzZXJfNjgxMDYxOF81NDY5OTAzNS03ZTQyLTQzNWUtOWJhZC00ZTBhODIwMjdkZTIud2VicA",
      description: "",
      onlineCount: 0,
    },
    {
      id: 4,
      title: "Digital Business Networking",
      creator: "METAPRENEURSHIP",
      category: "EVENTS",
      date: "Mar 27th 2:00 pm",
      attendees: 2,
      avatar:
        "https://img-v2-prod.whop.com/t2nsZ2c5fWimGc7zTteuJKtcNJc0bkH-NYL4gQNNAd8/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAzLTA2L3VzZXJfMjE3MzE2OF9lM2E4OGQ5NC0wODAzLTQ3MzUtODY1Zi0yMmQ3MjFmNjJkZmMucG5n",
      description: "Connect with other artists, creators, and brands building their digital business on Whop.",
      url: "https://whop.com/trentknox/live-MLKJ",
      onlineCount: 0,
    },
    {
      id: 5,
      title: "Educational Session",
      creator: "SGW Academy",
      category: "Live Sessions",
      date: "Mar 26th 8:30 pm",
      attendees: 2,
      avatar:
        "https://img-v2-prod.whop.com/LrJO0R8Ly5XoweQyp-sgHA7-85jzusXYEw8lbV0TEKs/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAxLTE0L3VzZXJfNjgzOTk4OV9iNzAxYjY2Ny01Mzk5LTQxY2ItYjg3My0wZTU4YTg0NGNmNTYucG5n",
      description: "",
      onlineCount: 0,
      isLive: true,
    },
    {
      id: 6,
      title: "Steak Abend in Düsseldorf",
      creator: "together",
      category: "Events",
      date: "Mar 29th 1:00 pm",
      attendees: 1,
      avatar:
        "https://img-v2-prod.whop.com/2W74PpMmKbLVVK2y94JP_k_X6ofAypkP-uzdqd7uAxs/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTEwLTE2L3VzZXJfMzc4NzE0Nl9lNTQ3NDg0Ny0wNGI0LTQ0ZjYtOWRjNi0xNmE5MTUzN2RiNmUuanBlZw",
      description:
        "- Exclusive event - The grill, Düsseldorf, Kö - Formal dress code - At least 50€ to spent on the food",
      location: "Düsseldorf - The Grill",
      onlineCount: 0,
    },
  ]

  const renderAppNameModal = () => {
    if (!showAppNameModal) return null

    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
        <div className="bg-[#121212] border border-[#2a2a2a] rounded-lg w-full max-w-sm overflow-hidden">
          <div className="p-3 flex items-center">
            <div className="bg-[#1a1a1a] h-8 w-8 rounded-md flex items-center justify-center text-white mr-2">A</div>
            <span className="text-white text-sm">amazon</span>
            <button className="ml-auto text-gray-400 hover:text-white" onClick={() => setShowAppNameModal(false)}>
              <X size={16} />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center px-4 py-10">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border-4 border-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>

            <h2 className="text-white text-lg font-medium mb-8 text-center">
              ¿Cómo le gustaría llamar a esta aplicación?
            </h2>

            <input
              type="text"
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-md px-4 py-2 text-white mb-10"
              placeholder="Evento"
            />
          </div>

          <button
            className="w-full bg-[#1a1a1a] hover:bg-[#252525] text-white py-3 border-t border-[#2a2a2a]"
            onClick={() => setShowAppNameModal(false)}
          >
            Volver
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Livestreams Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔴</span>
            <h2 className="text-xl font-semibold text-white">Livestreams</h2>
            <button className="ml-2 bg-blue-600 hover:bg-blue-700 rounded-full p-1.5 text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 5V19M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <p className="text-gray-400 text-sm mb-4">Mira transmisiones en vivo de algunas de las mejores creadoras.</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {livestreams.map((stream) => (
            <div key={stream.id} className="flex flex-col">
              <div className="flex items-center mb-2">
                <div className="h-6 w-6 rounded-full overflow-hidden mr-2 bg-[#252525] flex-shrink-0">
                  <img
                    src={stream.logo || "/placeholder.svg"}
                    alt={stream.creator}
                    className="h-full w-full object-cover"
                  />
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
          ))}
        </div>
        <div className="flex items-center justify-center mt-8">
          <hr className="flex-grow border-t border-[#2a2a2a]" />
          <Link
            to="/discover/all-streams"
            className="flex items-center text-blue-500 hover:text-blue-400 text-sm font-medium mx-4 cursor-pointer"
          >
            <span>Mostrar todo</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
          <hr className="flex-grow border-t border-[#2a2a2a]" />
        </div>
      </div>

      {/* Content Rewards Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
          <span className="text-2xl">💰</span>
          <h2 className="text-xl font-semibold text-white">Recompensas por contenido</h2>
            <button className="ml-2 bg-blue-600 hover:bg-blue-700 rounded-full p-1.5 text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 5V19M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <p className="text-gray-400 text-sm mb-4">Cobra por crear contenidos!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {contentRewards.map((reward) => (
            <ContentRewardCard key={reward.id} reward={reward} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-8">
          <hr className="flex-grow border-t border-[#2a2a2a]" />
          <Link
            to="home"
            className="flex items-center text-blue-500 hover:text-blue-400 text-sm font-medium mx-4 cursor-pointer"
          >
            <span>Mostrar todo</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
          <hr className="flex-grow border-t border-[#2a2a2a]" />
        </div>
      </div>

      {/* Happening Now Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <h2 className="text-xl font-semibold text-white">Ya está aquí</h2>
            <button className="ml-2 bg-blue-600 hover:bg-blue-700 rounded-full p-1.5 text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 5V19M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <p className="text-gray-400 text-sm mb-4">¡Vea lo que está ocurriendo en Whop!</p>

        <div className="flex overflow-x-auto pb-2 mb-4 gap-2 -mx-2 px-2">
          <button className="bg-[#252525] text-white px-4 py-2 rounded-md text-sm whitespace-nowrap">All</button>
          <button className="bg-[#1a1a1a] text-gray-300 hover:bg-[#252525] px-4 py-2 rounded-md text-sm whitespace-nowrap">
            Chats
          </button>
          <button className="bg-[#1a1a1a] text-gray-300 hover:bg-[#252525] px-4 py-2 rounded-md text-sm whitespace-nowrap">
            Forums
          </button>
          <button className="bg-[#1a1a1a] text-gray-300 hover:bg-[#252525] px-4 py-2 rounded-md text-sm whitespace-nowrap">
            Courses
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* HEAVY HITTERS Card */}
          <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] overflow-hidden">
            <div className="p-3 border-b border-[#2a2a2a]">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-md overflow-hidden mr-2 bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-xs">📊</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">HEAVY HITTERS 🏆 🏆 🏆 💎</h3>
                    <p className="text-xs text-gray-400">TMS Player Props 🎁</p>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded bg-blue-600 text-white">$9.99 / week</span>
              </div>
            </div>

            <div className="p-3">
              <div className="mb-3">
                <div className="flex items-start mb-2">
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex-shrink-0 mr-2 flex items-center justify-center">
                    <span className="text-white">🏀</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Antonio Gutierrez</p>
                    <p className="text-sm text-white">FanDuel under game special</p>
                  </div>
                </div>

                <div className="flex items-start mb-2">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 mr-2 flex items-center justify-center">
                    <span className="text-white text-xs">AG</span>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 mr-2 flex items-center justify-center">
                    <span className="text-white text-xs">BR</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Broadway</p>
                    <p className="text-sm text-white">My guy ❤️</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  <span className="text-xs text-gray-400 ml-1">(793) 7h</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                  <span className="text-xs text-green-400">38 online</span>
                </div>
              </div>
            </div>
          </div>

          {/* TMS FREE CHAT Card */}
          <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] overflow-hidden">
            <div className="p-3 border-b border-[#2a2a2a]">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-md overflow-hidden mr-2 bg-gray-700 flex items-center justify-center">
                    <span className="text-white text-xs">💬</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">TMS FREE CHAT</h3>
                    <p className="text-xs text-gray-400">TMS FREE PLAYS 📝</p>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded bg-blue-900/30 text-blue-400">Free</span>
              </div>
            </div>

            <div className="p-3">
              <div className="mb-3">
                <div className="flex items-start mb-2">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 mr-2 flex items-center justify-center">
                    <span className="text-white text-xs">TM</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">TMS Chat Mod</p>
                    <p className="text-sm text-white">
                      We always recommend to take our spreads or better. Get +7.5 if you can!
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-green-700 flex-shrink-0 mr-2 flex items-center justify-center">
                    <span className="text-white text-xs">🍀</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">SolanaJunki</p>
                    <p className="text-sm text-white">I found +7.5 -145 is that fine?</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  <span className="text-xs text-gray-400 ml-1">(793) 7h</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                  <span className="text-xs text-green-400">41 online</span>
                </div>
              </div>
            </div>
          </div>

          {/* BEGINNERS TRADING COURSE Card */}
          <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] overflow-hidden">
            <div className="p-3 border-b border-[#2a2a2a]">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-md overflow-hidden mr-2 bg-yellow-700 flex items-center justify-center">
                    <span className="text-white text-xs">📚</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">1. Beginners Series -- Start Here</h3>
                    <p className="text-xs text-gray-400">Crystal Academy Membership</p>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded bg-[#252525] text-white">$50.00 / month</span>
              </div>
            </div>

            <div className="p-3">
              <div className="mb-3">
                <div className="bg-[#0f0f0f] rounded-md overflow-hidden mb-2">
                  <div className="bg-gradient-to-r from-[#111] to-[#222] p-3 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-white font-bold tracking-wider">CRYSTAL ACADEMY</p>
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="text-white font-bold mb-1">BEGINNERS TRADING COURSE</h4>
                    <p className="text-sm text-gray-300">14 lecciones • These are the recordings from the...</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  <span className="text-xs text-gray-400 ml-1">(51) 28/2/2025</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                  <span className="text-xs text-green-400">27 online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Her Last Call Card */}
          <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] overflow-hidden">
            <div className="p-3 border-b border-[#2a2a2a]">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-md overflow-hidden mr-2 bg-pink-700 flex items-center justify-center">
                    <span className="text-white text-xs">👩‍🏫</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Start Here: Academy</h3>
                    <p className="text-xs text-gray-400">Her Last Call Academy</p>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded bg-[#252525] text-white">$49.00 / month</span>
              </div>
            </div>

            <div className="p-3">
              <div className="mb-3">
                <div className="bg-[#0f0f0f] rounded-md overflow-hidden mb-2">
                  <div className="bg-gradient-to-r from-pink-900/50 to-red-900/50 p-3 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-white font-bold tracking-wider">HER LAST CALL</p>
                      <p className="text-xs text-white">ACADEMY</p>
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="text-white font-bold mb-1">Her Last Call</h4>
                    <p className="text-sm text-gray-300">85 lecciones • Your Hot Girl Guide to Remote Sales</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  <span className="text-xs text-gray-400 ml-1">(26) 25/2/2025</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                  <span className="text-xs text-green-400">16 online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Community Chat Card */}
          <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] overflow-hidden">
            <div className="p-3 border-b border-[#2a2a2a]">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-md overflow-hidden mr-2 bg-blue-700 flex items-center justify-center">
                    <span className="text-white text-xs">💬</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Community Chat</h3>
                    <p className="text-xs text-gray-400">Thooth Pings</p>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded bg-[#252525] text-white">$7.99 / week</span>
              </div>
            </div>

            <div className="p-3">
              <div className="mb-3">
                <div className="flex items-start mb-2">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 mr-2 flex items-center justify-center">
                    <span className="text-white text-xs">🏀</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Looks like everything starts in 2 hours</p>
                    <p className="text-sm text-white">except for the Hawks vs Rockets game</p>
                  </div>
                </div>

                <div className="flex items-start mb-2">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 mr-2 flex items-center justify-center">
                    <span className="text-white text-xs">FY</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">funyunsun</p>
                    <p className="text-sm text-white">Let's get it done 🔥</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 mr-2 flex items-center justify-center overflow-hidden">
                    <img src="/placeholder.svg?height=32&width=32" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">DNPG</p>
                    <p className="text-sm text-white opacity-0">.</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  <span className="text-xs text-gray-400 ml-1">(520) 1h</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                  <span className="text-xs text-green-400">14 online</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-4">
          <hr className="flex-grow border-t border-[#2a2a2a]" />
          <hr className="flex-grow border-t border-[#2a2a2a]" />
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📅</span>
            <h2 className="text-xl font-semibold text-white">Próximos eventos</h2>
            <button
              className="bg-blue-600 hover:bg-blue-700 rounded-full p-1.5 text-white"
              onClick={() => setShowAppNameModal(true)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 5V19M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <p className="text-gray-400 text-sm mb-4">
          Descubra los principales acontecimientos que tendrán lugar próximamente
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] overflow-hidden hover:border-[#3a3a3a] transition-colors"
            >
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
          ))}
        </div>
      </div>
      {renderAppNameModal()}
    </div>
  )
}


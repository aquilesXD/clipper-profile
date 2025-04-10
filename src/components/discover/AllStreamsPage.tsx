"use client"

import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Search, Plus } from "lucide-react"
import Sidebar from "../layout/Sidebar"
import { AllStreamsView } from "./AllStreamsView"


export default function AllStreamsPage() {
    const navigate = useNavigate()
    const location = useLocation()
    const [searchQuery, setSearchQuery] = useState("")

    // Determine active tab based on URL
    const getActiveTab = () => {
      if (location.pathname.includes("leaderboards")) return "leaderboards"
      if (location.pathname.includes("for-you")) return "for-you"
      return "explore"
    }

    const activeTab = getActiveTab()

    const handleTabChange = (tab: string) => {
      navigate(`/discover/${tab === "explore" ? "" : tab}`)
    }

    return (
    <div className="min-h-screen bg-[#191919] flex flex-col">
      <Sidebar />
      <div className="flex-1 pl-20 lg:pl-24">
        <div className="p-4 lg:p-6">
          {/* Header fijo */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-4">
              <button
                className={`px-4 py-2 rounded-md ${activeTab === "explore" ? "text-white font-medium" : "text-gray-400"}`}
                onClick={() => handleTabChange("explore")}
              >
                Explore
              </button>
              <button
                className={`px-4 py-2 rounded-md ${activeTab === "leaderboards" ? "text-white font-medium" : "text-gray-400"}`}
                onClick={() => handleTabChange("leaderboards")}
              >
                Tablas de clasificación
              </button>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-full py-2 px-4 pl-10 text-white w-56"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>

          {/* Livestreams header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="mr-2 bg-red-500 rounded-md p-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                  <path d="M4 4.5A2.5 2.5 0 016.5 2H18a2.5 2.5 0 012.5 2.5v11.25a2.5 2.5 0 01-2.5 2.5H6.5A2.5 2.5 0 014 16.25V4.5zM19 4.75a.75.75 0 00-.75-.75H6.5a.75.75 0 00-.75.75v3.75h13V4.75zM19 9.5H5.75v6.75c0 .414.336.75.75.75H18a.75.75 0 00.75-.75V9.5z" />
                  <path d="M15 5.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM15 7.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM15 9.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-white">Livestreams</h1>
              <button className="ml-3 text-gray-400 hover:text-white">
                <Plus className="h-5 w-5" />
              </button>
            </div>
            <p className="text-gray-400 text-sm">Watch livestreams from some of the best creators</p>
          </div>

          {/* Contenido principal */}
          <section className="w-full">
            <AllStreamsView />
          </section>
        </div>
      </div>
    </div>
    )
  }

"use client"

import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Search } from "lucide-react"
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
          {/* Header fijo - igual que en Discover.tsx */}
          <div className="flex items-center justify-between mb-6 bg-[#121212] p-3 rounded-lg sticky top-0 z-10">
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

            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md py-2 px-3 pl-10 text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
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

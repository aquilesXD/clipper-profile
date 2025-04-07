"use client"

import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Search } from "lucide-react"
import { ExploreTab } from "../components/discover/ExploreTab"
import { ForYouTab } from "../components/discover/ForYouTab"
import Sidebar from "./layout/Sidebar"
import { LeaderboardsTab } from "./discover/LeaderBoards"

type DiscoverTabType = "explore" | "leaderboards" | "for-you"

export default function Discover() {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState("")

  // Determine active tab based on URL
  const getActiveTab = (): DiscoverTabType => {
    if (location.pathname.includes("leaderboards")) return "leaderboards"
    if (location.pathname.includes("for-you")) return "for-you"
    return "explore"
  }

  const activeTab = getActiveTab()

  const handleTabChange = (tab: DiscoverTabType) => {
    navigate(`/discover/${tab === "explore" ? "" : tab}`)
  }

  return (
    <div className="min-h-screen bg-[#121212]">
      <Sidebar />
      <div className="pl-20 lg:pl-24 pr-4 pb-8">
        <div className="card bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] mt-4">
          <div className="card-header p-3 border-b border-[#2a2a2a]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="col-span-1 md:col-span-8">
                <div className="flex flex-wrap gap-2">
                  <button
                    className={`px-4 py-2 rounded-md ${activeTab === "explore" ? "bg-[#252525] text-white" : "bg-[#1c1c1c] hover:bg-[#252525] text-gray-300"}`}
                    onClick={() => handleTabChange("explore")}
                  >
                    Explore
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md ${activeTab === "leaderboards" ? "bg-[#252525] text-white" : "bg-[#1c1c1c] hover:bg-[#252525] text-gray-300"}`}
                    onClick={() => handleTabChange("leaderboards")}
                  >
                    Leaderboards
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md ${activeTab === "for-you" ? "bg-[#252525] text-white" : "bg-[#1c1c1c] hover:bg-[#252525] text-gray-300"}`}
                    onClick={() => handleTabChange("for-you")}
                  >
                    For you
                  </button>
                </div>
              </div>

              <div className="col-span-1 md:col-span-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-[#121212] border border-[#2a2a2a] rounded-md py-2 px-3 pl-10 text-white"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
            </div>
          </div>

          <div className="card-body p-5">
            {activeTab === "explore" && <ExploreTab />}
            {activeTab === "leaderboards" && <LeaderboardsTab />}
            {activeTab === "for-you" && <ForYouTab />}
          </div>
        </div>
      </div>
    </div>
  )
}


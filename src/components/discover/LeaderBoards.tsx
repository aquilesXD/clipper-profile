"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export function LeaderboardsTab() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [activeFilter, setActiveFilter] = useState<string>("addicting")

  // Sample leaderboard data
  const leaderboards = [
    {
      id: 1,
      title: "TMS+ (Heavy Hitters)",
      description: "Whop's MOST ACTIVE Sports Betting Community 🏆 Join Today!",
      logo: "https://img-v2-prod.whop.com/EhTD3HTOhvFW-9uGE5QhWuqVLyunKFvKdz-Tdt2cvnM/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAxLTExL3VzZXJfNjgzOTk4OV83YThkMTQ5NS01YzIxLTRhMzYtYmIxMC1mMzNlODIxNmZiMmEucG5n",
      price: "$9.99 / week",
      category: "Sports Betting",
      minutes: "68,959",
      rating: 5,
      reviews: 793,
      joined: "10,244",
      startDate: "Dec 4, 2024",
      verified: true,
      ranking: "#53",
    },
    {
      id: 2,
      title: "TMS FREE PLAYS",
      description: "$5,000 - $50,000 FREE BET SLIPS FROM LAS VEGAS! 🎰",
      logo: "https://img-v2-prod.whop.com/RZ8NrlZkDsIVv9iVU4zlsxxKti8Jbe4uEgVmwWbDSTs/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAxLTE2L3VzZXJfNjgzOTk4OV8xM2NhN2Q2Yy0yZjVjLTQyNWEtYWY4NC0xMzY0NGRjZjU1MGQuanBlZw",
      price: "Free",
      category: "Sports Betting",
      minutes: "60,239",
      rating: 5,
      reviews: 793,
      joined: "83,658",
      startDate: "Jan 20, 2024",
      verified: true,
      ranking: "",
    },
    {
      id: 3,
      title: "Stock Hours Signals Chat",
      description: "Signals Sent by the Youngest Kid on Wall Street",
      logo: "https://img-v2-prod.whop.com/_57AbOadxM5bdZJReazIUNHlzzntrlwsdgAdFs-x0Ms/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTEyLTMwL3VzZXJfNjgxMDYxOF81NDY5OTAzNS03ZTQyLTQzNWUtOWJhZC00ZTBhODIwMjdkZTIud2VicA",
      price: "$199.00 / month",
      category: "Trading",
      minutes: "43,727",
      rating: 5,
      reviews: 496,
      joined: "480",
      startDate: "Mar 31, 2023",
      verified: true,
      ranking: "#118",
    },
    {
      id: 4,
      title: "PlayBit Free Live Trading",
      description: "Join us for Whop Live Trading Session!",
      logo: "https://img-v2-prod.whop.com/LrJO0R8Ly5XoweQyp-sgHA7-85jzusXYEw8lbV0TEKs/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAxLTE0L3VzZXJfNjgzOTk4OV9iNzAxYjY2Ny01Mzk5LTQxY2ItYjg3My0wZTU4YTg0NGNmNTYucG5n",
      price: "Free",
      category: "Trading",
      minutes: "39,508",
      rating: 5,
      reviews: 247,
      joined: "1,862",
      startDate: "May 20, 2024",
      verified: true,
      ranking: "",
    },
    {
      id: 5,
      title: "Options Insider Premium",
      description: "Experience 100% Live Trading From A Real Trader",
      logo: "https://img-v2-prod.whop.com/2W74PpMmKbLVVK2y94JP_k_X6ofAypkP-uzdqd7uAxs/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTEwLTE2L3VzZXJfMzc4NzE0Nl9lNTQ3NDg0Ny0wNGI0LTQ0ZjYtOWRjNi0xNmE5MTUzN2RiNmUuanBlZw",
      price: "$199.99 / month",
      category: "Trading",
      minutes: "37,446",
      rating: 5,
      reviews: 99,
      joined: "",
      startDate: "Jan 15, 2024",
      verified: true,
      ranking: "#19",
    },
    {
      id: 6,
      title: "RakeTrades Premium",
      description: "MEMBERSHIP & MASTERMIND BUNDLE",
      logo: "https://img-v2-prod.whop.com/kG597jx40jwdJaNX70kg4N0_2oG6cDSXrea-mYhmzy4/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAyLTI2L3VzZXJfNjMwOTk4NV8wYjAwMTMzNS02MjYyLTRhZTQtOGYzOC0wMzgxNWUyY2VmNjIucG5n",
      price: "$199.00 / month",
      category: "Trading",
      minutes: "27,539",
      rating: 5,
      reviews: 211,
      joined: "1,229",
      startDate: "May 14, 2023",
      verified: true,
      ranking: "#118",
    },
    {
      id: 7,
      title: "VIP Trader Access",
      description: "Make $3K-$5K/Month with 1 Simple Alert Per Day—No Guesswork",
      logo: "https://img-v2-prod.whop.com/1mBXbNthOdI2DiLNZy6QbYpf4WdIpsjyzapcj-qxXRw/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTEyLTMxL3VzZXJfMTU4NzMwOF84NDU3MmY1NC0yMDMwLTQ1ZGItYTI1NS1kYTcyZTU1ZWJkNGYucG5n",
      price: "$189.00 / month",
      category: "Trading",
      minutes: "22,769",
      rating: 5,
      reviews: 237,
      joined: "1,022",
      startDate: "Dec 7, 2023",
      verified: false,
      ranking: "#70",
    },
    {
      id: 8,
      title: "Thooth Pings",
      description: "Unlock Betting Success with AI-Powered Picks! 75% OFF!",
      logo: "https://img-v2-prod.whop.com/t2nsZ2c5fWimGc7zTteuJKtcNJc0bkH-NYL4gQNNAd8/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAzLTA2L3VzZXJfMjE3MzE2OF9lM2E4OGQ5NC0wODAzLTQ3MzUtODY1Zi0yMmQ3MjFmNjJkZmMucG5n",
      price: "$7.99 / week",
      category: "Sports Betting",
      minutes: "17,976",
      rating: 5,
      reviews: 520,
      joined: "",
      startDate: "Dec 19, 2024",
      verified: false,
      ranking: "#864",
    },
    {
      id: 9,
      title: "Crystal Academy Membership",
      description: "Making trading crystal clear!",
      logo: "https://img-v2-prod.whop.com/D7irSMkDrHDiHYoR3voto4vvBNeN-n_hQFhjbboYQho/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAzLTA2L3VzZXJfMjE3MzE2OF8wOWZiOWEzNC01ZmQ1LTQwN2YtYWMzYy00ZTEyODg3YmIxYTYucG5n",
      price: "$50.00 / month",
      category: "Trading",
      minutes: "16,417",
      rating: 5,
      reviews: 51,
      joined: "",
      startDate: "Apr 23, 2023",
      verified: false,
      ranking: "#51",
    },
  ]

  return (
    <div>
      {/* Category filters */}
      <div className="mb-6 bg-[#191919] p-2 rounded-lg overflow-x-auto">
        <div className="flex space-x-4 min-w-max">
        <button
            className={`px-2 py-1 rounded-md text-xs ${activeCategory === "all" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"}`}
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>
          <button
            className={`px-2 py-1 rounded-md text-xs ${activeCategory === "e-commerce" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"}`}
            onClick={() => setActiveCategory("e-commerce")}
          >
            E-Commerce
          </button>
          <button
            className={`px-2 py-1 rounded-md text-xs ${activeCategory === "personal-finance" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"}`}
            onClick={() => setActiveCategory("personal-finance")}
          >
            Personal Finance
          </button>
          <button
            className={`px-2 py-1 rounded-md text-xs ${activeCategory === "gaming" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"}`}
            onClick={() => setActiveCategory("gaming")}
          >
            Gaming
          </button>
          <button
            className={`px-2 py-1 rounded-md text-xs ${activeCategory === "real-estate" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"}`}
            onClick={() => setActiveCategory("real-estate")}
          >
            Real Estate
          </button>
          <button
            className={`px-2 py-1 rounded-md text-xs ${activeCategory === "dating" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"}`}
            onClick={() => setActiveCategory("dating")}
          >
            Dating
          </button>
          <button
            className={`px-2 py-1 rounded-md text-xs ${activeCategory === "travel" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"}`}
            onClick={() => setActiveCategory("travel")}
          >
            Travel
          </button>
          <button
            className={`px-2 py-1 rounded-md text-xs ${activeCategory === "personal-development" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"}`}
            onClick={() => setActiveCategory("personal-development")}
          >
            Personal Development
          </button>
          <button
            className={`px-2 py-1 rounded-md text-xs ${activeCategory === "reselling" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"}`}
            onClick={() => setActiveCategory("reselling")}
          >
            Reselling
          </button>
          <button
            className={`px-2 py-1 rounded-md text-xs ${activeCategory === "business" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"}`}
            onClick={() => setActiveCategory("business")}
          >
            Business
          </button>
          <button
            className={`px-2 py-1 rounded-md text-xs ${activeCategory === "social-media" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"}`}
            onClick={() => setActiveCategory("social-media")}
          >
            Social Media
          </button>
          <button
            className={`px-2 py-1 rounded-md text-xs ${activeCategory === "newsletters" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"}`}
            onClick={() => setActiveCategory("newsletters")}
          >
            Newsletters
          </button>
          <button
            className={`px-2 py-1 rounded-md text-xs ${activeCategory === "trading" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"}`}
            onClick={() => setActiveCategory("trading")}
          >
            Trading
          </button>
          <button
            className={`px-2 py-1 rounded-md text-xs ${activeCategory === "agencies" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"}`}
            onClick={() => setActiveCategory("agencies")}
          >
            Agencies
          </button>
          <button
            className={`px-2 py-1 rounded-md text-xs ${activeCategory === "fitness" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"}`}
            onClick={() => setActiveCategory("fitness")}
          >
            Fitness
          </button>
          <button
            className={`px-2 py-1 rounded-md text-xs ${activeCategory === "spirituality" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"}`}
            onClick={() => setActiveCategory("spirituality")}
          >
            Spirituality
          </button>
        </div>
      </div>

      {/* Promotional banners */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-[#1a1a1a] rounded-lg p-6 relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-yellow-400 text-xs mb-2">Get paid to clip content</div>
            <h3 className="text-lg font-bold text-white mb-3">
              Clip content from your favorite creator and get paid for the views you generate.
            </h3>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md text-sm font-medium">
              Start earning
            </button>
          </div>
          <div className="absolute right-0 bottom-0 w-24 h-24 opacity-80">
            <img
              src="/placeholder.svg?height=96&width=96"
              alt="Megaphone icon"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="bg-[#ff4500] rounded-lg p-6 relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-white text-xs mb-2">Introducing Whop content rewards</div>
            <h3 className="text-lg font-bold text-white mb-3">
              Pay your users to post content about your brand. Only pay for the views they generate.
            </h3>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md text-sm font-medium">
              Learn more
            </button>
          </div>
          <div className="absolute right-0 bottom-0 w-24 h-24 opacity-80">
            <img src="/placeholder.svg?height=96&width=96" alt="Reward icon" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="bg-blue-600 rounded-lg p-6 relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-white text-xs mb-2">Discover home page</div>
            <h3 className="text-lg font-bold text-white mb-3">
              Want to get on the front page of Discover? Learn how here.
            </h3>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md text-sm font-medium">
              Read now
            </button>
          </div>
          <div className="absolute right-0 bottom-0 w-24 h-24 opacity-80">
            <img
              src="/placeholder.svg?height=96&width=96"
              alt="Megaphone icon"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          className={`flex items-center px-4 py-2 rounded-full ${activeFilter === "addicting" ? "bg-white text-black" : "bg-[#1a1a1a] hover:bg-[#252525] text-white"}`}
          onClick={() => setActiveFilter("addicting")}
        >
          <span className="mr-2">🔥</span>
          <span>Lo más adictivo</span>
        </button>
        <button
          className={`flex items-center px-4 py-2 rounded-full ${activeFilter === "newest" ? "bg-white text-black" : "bg-[#1a1a1a] hover:bg-[#252525] text-white"}`}
          onClick={() => setActiveFilter("newest")}
        >
          <span className="mr-2">✨</span>
          <span>Más reciente</span>
        </button>
        <button
          className={`flex items-center px-4 py-2 rounded-full ${activeFilter === "reviews" ? "bg-white text-black" : "bg-[#1a1a1a] hover:bg-[#252525] text-white"}`}
          onClick={() => setActiveFilter("reviews")}
        >
          <span className="mr-2">★</span>
          <span>La mayoría de las críticas</span>
        </button>
        <button
          className={`flex items-center px-4 py-2 rounded-full ${activeFilter === "affiliate" ? "bg-white text-black" : "bg-[#1a1a1a] hover:bg-[#252525] text-white"}`}
          onClick={() => setActiveFilter("affiliate")}
        >
          <span className="mr-2">🔗</span>
          <span>Las mejores ofertas de afiliación</span>
        </button>
        <button
          className={`flex items-center px-4 py-2 rounded-full ${activeFilter === "bounties" ? "bg-white text-black" : "bg-[#1a1a1a] hover:bg-[#252525] text-white"}`}
          onClick={() => setActiveFilter("bounties")}
        >
          <span className="mr-2">🎯</span>
          <span>Recompensas disponibles</span>
        </button>
        <button
          className={`flex items-center px-4 py-2 rounded-full ${activeFilter === "money" ? "bg-white text-black" : "bg-[#1a1a1a] hover:bg-[#252525] text-white"}`}
          onClick={() => setActiveFilter("money")}
        >
          <span className="mr-2">💰</span>
          <span>Más dinero ganado</span>
        </button>
      </div>
      <div className="text-xs text-gray-400 mb-6">
        <span>¿Cómo se actualiza esta página?</span>
      </div>

      {/* Leaderboard grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {leaderboards.map((item) => (
          <div
            key={item.id}
            className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] overflow-hidden hover:border-[#3a3a3a] transition-colors cursor-pointer"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-lg overflow-hidden mr-3 bg-[#252525] flex items-center justify-center">
                    <img
                      src={item.logo || "/placeholder.svg"}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-bold text-white text-sm">{item.title}</h3>
                      {item.verified && (
                        <svg className="h-4 w-4 ml-1 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                    {item.ranking && (
                      <div className="flex items-center text-xs text-gray-400">
                        <span>✓ Clasificación {item.ranking}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-sm font-medium ${item.price === "Free" ? "text-blue-400" : "text-white"}`}>
                    {item.price}
                  </span>
                </div>
              </div>

              <p className="text-white font-bold mb-3">{item.description}</p>

              <div className="mb-2">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm text-white">{item.minutes} minutes</p>
                  <p className="text-xs text-gray-400">Tiempo dedicado hoy por los usuarios</p>
                </div>
                <div className="relative h-8 w-full">
                  <div className="absolute inset-0">
                    <svg className="w-full h-full" viewBox="0 0 300 40">
                      <path
                        d="M0,20 Q30,15 60,25 T120,15 T180,25 T240,20 T300,15"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 text-xs text-gray-400">{item.startDate}</div>
                  <div className="absolute bottom-0 right-0 text-xs text-gray-400">Today</div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                      ))}
                  </div>
                  <span className="text-xs text-gray-400 ml-1">
                    ({item.reviews}) {Math.floor(Math.random() * 24)}h
                  </span>
                </div>
                {item.joined && (
                  <div className="flex items-center">
                    <span className="inline-flex items-center text-xs text-gray-400">
                      <span className="inline-block w-3 h-3 bg-gray-600 rounded-full flex items-center justify-center mr-1 text-[8px]">
                        👤
                      </span>
                      {item.joined} unido
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 mb-4">
        <div className="flex items-center space-x-1">
          <button className="p-2 rounded-md bg-[#1a1a1a] text-gray-400">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#1a1a1a] text-white font-medium">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-[#1a1a1a] text-gray-400">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-[#1a1a1a] text-gray-400">
            3
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-[#1a1a1a] text-gray-400">
            4
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-[#1a1a1a] text-gray-400">
            5
          </button>
          <span className="text-gray-400">...</span>
          <button className="w-10 h-8 flex items-center justify-center rounded-md hover:bg-[#1a1a1a] text-gray-400">
            606
          </button>
          <button className="p-2 rounded-md bg-[#1a1a1a] text-gray-400">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}


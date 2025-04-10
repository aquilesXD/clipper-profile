"use client"

import { useState } from "react"
import Sidebar from "../../components/layout/Sidebar";
import { CampaignSidebar } from "../../components/layout/CampaignSidebar";
import { RewardModal } from "../../components/discover/RewardModal"

export default function CampaignRewards() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#121212]">
      <Sidebar />
      <div className="pl-20 lg:pl-24">
        <div className="flex flex-col lg:flex-row">
          <CampaignSidebar activeItem="rewards" />
          <main className="flex-1 p-4 lg:p-8">
            <div className="card border-0 bg-[#121212]">
              <div className="card-header mb-3 p-5 border-b border-[#2a2a2a]">
                <div className="flex items-center">
                  <img
                    src="https://img-v2-prod.whop.com/uxJX37zd8NkHDzEDKdt2kTVWBPv-63XskD3XC1c7Hrk/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAzLTA2L3VzZXJfMjE3MzE2OF9lYzVmNDAwYy00YmEwLTQxOWQtOGQ4Ny04MzZmNDNjYzY1NmEucG5n"
                    alt="REWARDS icon"
                    className="h-8 w-8 rounded mr-3"
                  />
                  <p className="text-xl font-medium text-white mb-0">REWARDS</p>
                </div>
              </div>

                <div className="card-header mb-3 p-5 border-b border-[#2a2a2a]">
                <div className="w-full space-y-4 pl-4">
                  <p className="text-xl font-medium text-white mb-0 relative left-12">
                  Tucker Carlson Podcast + News // $4 Per 1k Views
                  </p>
                </div>
                </div>

              <div className="card-body py-0 px-5">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  <div className="col-span-1 lg:col-span-7 text-justify">
                    <div className="bg-[#1a1a1a] border border-[#333] p-3 rounded-xl">
                      <p className="font-medium text-base text-[#FF9800]">
                        Submit your post for review within 1 hour of publishing to start getting paid
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <p className="text-gray-400 text-base font-medium mb-1">PAID OUT</p>
                        <div className="flex justify-between">
                          <p className="text-white text-sm mb-1">$13,45 of $10,000 paid out</p>
                          <p className="text-white text-sm mb-1">1%</p>
                        </div>
                        <div className="h-3 w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded">
                          <div className="h-full bg-orange-500 rounded" style={{ width: "1%" }}></div>
                        </div>
                      </div>

                      <div>
                        <p className="text-gray-400 text-base font-medium mb-1">TIME LEFT</p>
                        <div className="flex justify-between">
                          <p className="text-white text-sm mb-1">56 days left</p>
                          <p className="text-white text-sm mb-1">38%</p>
                        </div>
                        <div className="h-3 w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded">
                          <div className="h-full bg-orange-500 rounded" style={{ width: "38%" }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div>
                        <p className="text-gray-400 text-xs font-medium mb-1">REWARD</p>
                        <div className="bg-gradient-to-b from-[#1754D8] to-[#578CFF] text-white text-xs font-semibold py-1 px-2 rounded w-32 border border-[#2862e2]">
                          4.00 US$ / <span className="opacity-60">1 mil</span>
                        </div>
                      </div>

                      <div>
                        <p className="text-gray-400 text-xs font-medium mb-1">CONTENT TYPE</p>
                        <div className="bg-[#1a1a1a] text-white text-xs font-semibold py-1 px-2 rounded w-32">
                          Clipping
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div>
                        <p className="text-gray-400 text-base font-medium mb-1">MAX PAID OUT</p>
                        <div className="bg-[#1a1a1a] text-white text-xs font-semibold py-1 px-2 rounded w-32">
                          $ 500
                        </div>
                      </div>

                      <div>
                        <p className="text-gray-400 text-base font-medium mb-1">CATEGORY</p>
                        <div className="bg-[#1a1a1a] text-white text-xs font-semibold py-1 px-2 rounded w-32">
                          Creator
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-gray-400 text-base font-medium mb-1">PLATFORMS</p>
                      <img
                        src="https://assets.whop.com/core/2afe54ae8a904906b22dfce0/_next/static/media/tiktok-logo.b77808fb.svg"
                        alt="TikTok Logo"
                        className="h-6"
                      />
                    </div>

                    <div className="mt-4">
                      <p className="text-gray-400 text-base font-medium mb-1">REQUIREMENTS</p>
                      <div className="space-y-2">
                        <div className="bg-[#1a1a1a] text-white text-sm font-normal py-1 px-2 rounded text-left">
                          Análisis de audiencia objetivo (edad, intereses, ubicación)
                        </div>
                        <div className="bg-[#1a1a1a] text-white text-sm font-normal py-1 px-2 rounded text-left">
                          Elección del formato de anuncio (In-Feed, TopView, Branded Hashtag, Spark Ads)
                        </div>
                        <div className="bg-[#1a1a1a] text-white text-sm font-normal py-1 px-2 rounded text-left">
                          Uso de efectos y sonidos populares
                        </div>
                        <div className="bg-[#1a1a1a] text-white text-sm font-normal py-1 px-2 rounded text-left">
                          Incrementar conversiones (ventas, registros, descargas, etc.)
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 gap-4 mt-6">
                      <div className="col-span-8">
                        <p className="text-white text-lg font-medium mb-0">
                          Tucker Carlson Podcast + News // $4 Per 1k Views
                        </p>
                        <p className="text-gray-400 text-base">$0.50 / 1K</p>
                      </div>
                      <div className="col-span-4">
                        <button
                          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded mt-2"
                          onClick={() => setIsModalOpen(true)}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {isModalOpen && <RewardModal onClose={() => setIsModalOpen(false)} />}
    </div>
  )
}


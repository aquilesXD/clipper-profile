"use client"

import { Info, ExternalLink } from "lucide-react"

interface StatisticsCardProps {
  title: string
  value: string
  subtext?: string
  noDataMessage: string
  showGraph?: boolean
  showLargeNumber?: boolean
}

export function StatisticsCard({
  title,
  value,
  subtext,
  noDataMessage,
  showGraph = false,
  showLargeNumber = false,
}: StatisticsCardProps) {
  return (
    <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
          <button className="ml-1 text-gray-500 hover:text-gray-400">
            <Info className="h-4 w-4" />
          </button>
        </div>
        <button className="text-gray-500 hover:text-gray-400">
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>

      {showLargeNumber ? (
        <div className="flex flex-col items-center justify-center py-4 sm:py-6">
          <p className="text-4xl sm:text-5xl font-bold text-white">0</p>
          {subtext && <p className="text-gray-400 text-xs sm:text-sm mt-2">{subtext}</p>}
        </div>
      ) : (
        <>
          {value && <p className="text-xl sm:text-2xl font-bold text-white mb-3">{value}</p>}
          <div className="flex items-center justify-center h-20 sm:h-24 text-gray-500 text-sm">{noDataMessage}</div>
        </>
      )}
    </div>
  )
}


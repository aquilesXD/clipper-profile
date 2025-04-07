"use client"

import { Search } from "lucide-react"

interface DashboardHeaderProps {
  selectedWhop: string
  setSelectedWhop: (whop: string) => void
}

export function DashboardHeader({ selectedWhop, setSelectedWhop }: DashboardHeaderProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-[#121212] border-b border-[#2a2a2a] py-2 px-3 sm:px-4 flex justify-end items-center h-14 ml-[60px] md:ml-[310px]">
      <div className="flex items-center">
        <div className="relative mr-2 sm:mr-4">
          <input
            type="text"
            placeholder="Buscar en..."
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-md py-1.5 pl-8 pr-2 sm:pr-4 text-white w-32 sm:w-56 text-sm"
          />
          <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-2 sm:px-3 py-1.5 rounded-md text-xs font-medium">
          Nuevo whop
        </button>
      </div>
    </div>
  )
}


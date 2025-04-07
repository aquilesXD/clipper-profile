"use client"

import { Info, ExternalLink } from "lucide-react"

export function DailyMetrics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 mb-6">
      <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <h3 className="text-gray-400 text-sm font-medium">Ingresos brutos</h3>
            <button className="ml-1 text-gray-500 hover:text-gray-400">
              <Info className="h-4 w-4" />
            </button>
          </div>
          <button className="text-gray-500 hover:text-gray-400">
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>

        <p className="text-2xl font-bold text-white mb-6">0 US$</p>

        <div className="flex items-center justify-center h-24 text-gray-500">No hay datos disponibles</div>
      </div>

      <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <h3 className="text-gray-400 text-sm font-medium">Tiempo gastado</h3>
            <button className="ml-1 text-gray-500 hover:text-gray-400">
              <Info className="h-4 w-4" />
            </button>
          </div>
          <button className="text-gray-500 hover:text-gray-400">
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>

        <p className="text-2xl font-bold text-white mb-6">0 minutos</p>

        <div className="flex items-center justify-center h-24 text-gray-500">No hay datos disponibles</div>
      </div>
    </div>
  )
}


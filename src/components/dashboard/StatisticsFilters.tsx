"use client"

import { useState, useEffect, useRef } from "react"
import { Calendar, ChevronDown, Plus, Settings } from "lucide-react"

export function StatisticsFilters() {
  const [isDateRangeOpen, setIsDateRangeOpen] = useState(false)
  const [isComparisonOpen, setIsComparisonOpen] = useState(false)
  const [isFrequencyOpen, setIsFrequencyOpen] = useState(false)

  const [dateRange, setDateRange] = useState("Últimos 7 días")
  const [comparisonPeriod, setComparisonPeriod] = useState("Periodo anterior")
  const [frequency, setFrequency] = useState("Diario")

  const dateRangeRef = useRef<HTMLDivElement>(null)
  const comparisonRef = useRef<HTMLDivElement>(null)
  const frequencyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dateRangeRef.current && !dateRangeRef.current.contains(event.target as Node)) {
        setIsDateRangeOpen(false)
      }
      if (comparisonRef.current && !comparisonRef.current.contains(event.target as Node)) {
        setIsComparisonOpen(false)
      }
      if (frequencyRef.current && !frequencyRef.current.contains(event.target as Node)) {
        setIsFrequencyOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-between items-start sm:items-center mb-6 gap-2">
      <div className="flex flex-wrap gap-2 mb-4 md:mb-0 w-full sm:w-auto">
        {/* Date Range Dropdown */}
        <div className="relative" ref={dateRangeRef}>
          <button
            className="bg-[#1a1a1a] hover:bg-[#252525] text-white px-3 py-2 rounded-md text-xs flex items-center"
            onClick={() => setIsDateRangeOpen(!isDateRangeOpen)}
          >
            <span>{dateRange}</span>
            <ChevronDown className="h-3 w-3 ml-2" />
          </button>

          {isDateRangeOpen && (
            <div className="absolute top-full left-0 mt-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md shadow-lg z-10 w-48">
              <button
                className="w-full text-left px-3 py-2 text-xs text-white hover:bg-[#252525]"
                onClick={() => {
                  setDateRange("Hoy")
                  setIsDateRangeOpen(false)
                }}
              >
                Hoy
              </button>
              <button
                className="w-full text-left px-3 py-2 text-xs text-white hover:bg-[#252525]"
                onClick={() => {
                  setDateRange("Últimos 7 días")
                  setIsDateRangeOpen(false)
                }}
              >
                Últimos 7 días
              </button>
              <button
                className="w-full text-left px-3 py-2 text-xs text-white hover:bg-[#252525]"
                onClick={() => {
                  setDateRange("Últimas 4 semanas")
                  setIsDateRangeOpen(false)
                }}
              >
                Últimas 4 semanas
              </button>
              <button
                className="w-full text-left px-3 py-2 text-xs text-white hover:bg-[#252525]"
                onClick={() => {
                  setDateRange("Últimos 3 meses")
                  setIsDateRangeOpen(false)
                }}
              >
                Últimos 3 meses
              </button>
              <button
                className="w-full text-left px-3 py-2 text-xs text-white hover:bg-[#252525]"
                onClick={() => {
                  setDateRange("Últimos 12 meses")
                  setIsDateRangeOpen(false)
                }}
              >
                Últimos 12 meses
              </button>
              <button
                className="w-full text-left px-3 py-2 text-xs text-white hover:bg-[#252525]"
                onClick={() => {
                  setDateRange("Mes hasta la fecha")
                  setIsDateRangeOpen(false)
                }}
              >
                Mes hasta la fecha
              </button>
              <button
                className="w-full text-left px-3 py-2 text-xs text-white hover:bg-[#252525]"
                onClick={() => {
                  setDateRange("Trimestre hasta la fecha")
                  setIsDateRangeOpen(false)
                }}
              >
                Trimestre hasta la fecha
              </button>
              <button
                className="w-full text-left px-3 py-2 text-xs text-white hover:bg-[#252525]"
                onClick={() => {
                  setDateRange("Año hasta la fecha")
                  setIsDateRangeOpen(false)
                }}
              >
                Año hasta la fecha
              </button>
            </div>
          )}
        </div>

        <button className="bg-[#1a1a1a] hover:bg-[#252525] text-white px-3 py-2 rounded-md text-xs flex items-center">
          <Calendar className="h-3 w-3 mr-2" />
          <span>19 - 25 mar 2025</span>
        </button>

        <span className="text-gray-400 px-2 py-2 text-xs">en comparación con</span>

        {/* Comparison Period Dropdown */}
        <div className="relative" ref={comparisonRef}>
          <button
            className="bg-[#1a1a1a] hover:bg-[#252525] text-white px-3 py-2 rounded-md text-xs flex items-center"
            onClick={() => setIsComparisonOpen(!isComparisonOpen)}
          >
            <span>{comparisonPeriod}</span>
            <ChevronDown className="h-3 w-3 ml-2" />
          </button>

          {isComparisonOpen && (
            <div className="absolute top-full left-0 mt-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md shadow-lg z-10 w-48">
              <button
                className="w-full text-left px-3 py-2 text-xs text-white hover:bg-[#252525]"
                onClick={() => {
                  setComparisonPeriod("Periodo anterior")
                  setIsComparisonOpen(false)
                }}
              >
                Periodo anterior
              </button>
              <button
                className="w-full text-left px-3 py-2 text-xs text-white hover:bg-[#252525]"
                onClick={() => {
                  setComparisonPeriod("Año anterior")
                  setIsComparisonOpen(false)
                }}
              >
                Año anterior
              </button>
              <button
                className="w-full text-left px-3 py-2 text-xs text-white hover:bg-[#252525]"
                onClick={() => {
                  setComparisonPeriod("A medida")
                  setIsComparisonOpen(false)
                }}
              >
                A medida
              </button>
            </div>
          )}
        </div>

        {/* Frequency Dropdown */}
        <div className="relative" ref={frequencyRef}>
          <button
            className="bg-[#1a1a1a] hover:bg-[#252525] text-white px-3 py-2 rounded-md text-xs flex items-center"
            onClick={() => setIsFrequencyOpen(!isFrequencyOpen)}
          >
            <span>{frequency}</span>
            <ChevronDown className="h-3 w-3 ml-2" />
          </button>

          {isFrequencyOpen && (
            <div className="absolute top-full left-0 mt-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md shadow-lg z-10 w-48">
              <button
                className="w-full text-left px-3 py-2 text-xs text-white hover:bg-[#252525]"
                onClick={() => {
                  setFrequency("Diario")
                  setIsFrequencyOpen(false)
                }}
              >
                Diario
              </button>
              <button
                className="w-full text-left px-3 py-2 text-xs text-white hover:bg-[#252525]"
                onClick={() => {
                  setFrequency("Semanal")
                  setIsFrequencyOpen(false)
                }}
              >
                Semanal
              </button>
              <button
                className="w-full text-left px-3 py-2 text-xs text-white hover:bg-[#252525]"
                onClick={() => {
                  setFrequency("Mensual")
                  setIsFrequencyOpen(false)
                }}
              >
                Mensual
              </button>
            </div>
          )}
        </div>

        <span className="text-gray-400 px-2 py-2 text-xs">en</span>

        <button className="bg-[#1a1a1a] hover:bg-[#252525] text-white px-3 py-2 rounded-md text-xs flex items-center">
          <span>Todos los whops</span>
          <ChevronDown className="h-3 w-3 ml-2" />
        </button>
      </div>

      <div className="flex gap-2">
        <button className="bg-[#1a1a1a] hover:bg-[#252525] text-white p-2 rounded-md">
          <Plus className="h-4 w-4" />
        </button>
        <button className="bg-[#1a1a1a] hover:bg-[#252525] text-white p-2 rounded-md">
          <Settings className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}


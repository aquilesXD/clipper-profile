"use client"

import { useState } from "react"

import { ChevronRight, Info, Calendar, RefreshCw, ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"
import Sidebar from "../layout/Sidebar"
import { AffiliationAssetsModal } from "./AffiliationAssetsModal"


export default function AffiliateCustomerDashboard() {
  const [activeTab, setActiveTab] = useState<"cliente" | "creador">("cliente")
  const [dateRange, setDateRange] = useState<string>("Últimos 7 días")
  const [comparisonPeriod, setComparisonPeriod] = useState<string>("Período anterior")
  const [frequency, setFrequency] = useState<string>("Diario")
  const [isAssetsModalOpen, setIsAssetsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#121212]">
      <Sidebar />
      <div className="pl-20 lg:pl-24">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-white">Afiliados</h1>
            <button className="bg-transparent hover:bg-[#252525] text-white p-2 rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

          {/* Tabs and Training Button */}
          <div className="flex justify-between items-center mb-6">
            <div className="bg-[#1a1a1a] rounded-md p-1 inline-flex">
              <Link to="/affiliate/customer">
                <button
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    activeTab === "cliente" ? "bg-[#252525] text-white" : "text-gray-400"
                  }`}
                  onClick={() => setActiveTab("cliente")}
                >
                  Cliente
                </button>
              </Link>
              <Link to="/affiliate/creator">
                <button
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    activeTab === "creador" ? "bg-[#252525] text-white" : "text-gray-400"
                  }`}
                  onClick={() => setActiveTab("creador")}
                >
                  Creador
                </button>
              </Link>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
              <svg
                className="mr-2"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Iniciar la formación de Whop Affiliates
            </button>
          </div>

          {/* My Affiliate Links Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-white">Mis enlaces afiliados</h2>
              <button className="text-blue-400 hover:text-blue-300 text-sm">Ver todos</button>
            </div>

            <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-4 mb-4">
              <div className="flex items-start mb-4">
                <div className="bg-[#252525] p-2 rounded-md mr-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 20C18 17.7909 15.3137 16 12 16C8.68629 16 6 17.7909 6 20"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-white font-medium">Clip Curators</h3>
                      <div className="bg-green-900/30 text-green-400 text-xs px-2 py-1 rounded inline-flex items-center mt-1">
                        <span className="mr-1">30%</span>
                        <span>Recompensa</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-white font-medium">0.00 US$ made</p>
                    <p className="text-gray-400 text-sm">0 usuarios remitidos · Free</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button
                  className="bg-[#252525] hover:bg-[#333] text-white py-2 px-4 rounded-md text-sm"
                  onClick={() => setIsAssetsModalOpen(true)}
                >
                  Ver el contenido
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm">
                  Copiar enlace de afiliado
                </button>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-4">Estadísticas</h2>

            {/* Date Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button className="bg-[#1a1a1a] hover:bg-[#252525] text-white px-3 py-2 rounded-md text-sm flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{dateRange}</span>
                <ChevronDown className="h-4 w-4 ml-2" />
              </button>

              <div className="flex items-center text-gray-400 mx-2">
                <span>en comparación con</span>
              </div>

              <button className="bg-[#1a1a1a] hover:bg-[#252525] text-white px-3 py-2 rounded-md text-sm flex items-center">
                <span>{comparisonPeriod}</span>
                <ChevronDown className="h-4 w-4 ml-2" />
              </button>

              <button className="bg-[#1a1a1a] hover:bg-[#252525] text-white px-3 py-2 rounded-md text-sm flex items-center">
                <span>{frequency}</span>
                <ChevronDown className="h-4 w-4 ml-2" />
              </button>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <h3 className="text-white font-medium">Recompensas para afiliados</h3>
                    <button className="ml-2 text-gray-400 hover:text-white">
                      <Info className="h-4 w-4" />
                    </button>
                  </div>
                  <button className="text-gray-400 hover:text-white">
                    <RefreshCw className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-2xl font-bold text-white mb-8">0 US$</p>
                <div className="flex items-center justify-center h-32 text-gray-500">No hay datos disponibles</div>
              </div>

              <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <h3 className="text-white font-medium">Referencias de afiliados</h3>
                    <button className="ml-2 text-gray-400 hover:text-white">
                      <Info className="h-4 w-4" />
                    </button>
                  </div>
                  <button className="text-gray-400 hover:text-white">
                    <RefreshCw className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-2xl font-bold text-white mb-8">0</p>
                <div className="flex items-center justify-center h-32 text-gray-500">No hay datos disponibles</div>
              </div>
            </div>
          </div>

          {/* Finances Section */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Finanzas</h2>

            {/* Payment Configuration */}
            <div className="bg-[#0c1b36] border border-[#1a3a6a] rounded-lg p-4 mb-6 flex justify-between items-center">
              <p className="text-blue-100 text-sm">Configure sus cuentas de pago para cobrar rápidamente.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                Establecer pagos por Whop
              </button>
            </div>

            {/* Financial Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a] group hover:border-[#3a3a3a] cursor-pointer">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-gray-400 text-sm">Saldo de reserva</h3>
                  <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors" />
                </div>
                <p className="text-white text-2xl font-bold mb-1">0,00 US$</p>
                <p className="text-gray-500 text-xs">Hoy</p>
              </div>

              <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a] group hover:border-[#3a3a3a] cursor-pointer">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-gray-400 text-sm">Saldo pendiente</h3>
                  <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors" />
                </div>
                <p className="text-white text-2xl font-bold mb-1">0,00 US$</p>
                <p className="text-gray-500 text-xs">Hoy</p>
              </div>

              <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a] group hover:border-[#3a3a3a] cursor-pointer">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-gray-400 text-sm">Disponible para pagar</h3>
                  <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors" />
                </div>
                <p className="text-white text-2xl font-bold mb-1">0,00 US$</p>
                <p className="text-gray-500 text-xs">Hoy</p>
              </div>

              <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a] group hover:border-[#3a3a3a] cursor-pointer">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-gray-400 text-sm">En tránsito al banco</h3>
                  <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors" />
                </div>
                <p className="text-white text-2xl font-bold mb-1">0,00 US$</p>
                <p className="text-gray-500 text-xs">Hoy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Affiliation Assets Modal */}
      <AffiliationAssetsModal
        isOpen={isAssetsModalOpen}
        onClose={() => setIsAssetsModalOpen(false)}
        programName="Clip Curators"
      />
    </div>
  )
}


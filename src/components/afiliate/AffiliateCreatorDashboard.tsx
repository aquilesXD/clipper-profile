"use client"

import { useState } from "react"

import { ChevronRight, Info, ChevronLeft, ChevronRightIcon } from "lucide-react"
import { Link } from "react-router-dom"
import Sidebar from "../layout/Sidebar"

export default function AffiliateCreatorDashboard() {
  const [activeTab, setActiveTab] = useState<"cliente" | "creador">("creador")

  return (
    <div className="min-h-screen bg-[#121212]">
      <Sidebar />
      <div className="pl-20 lg:pl-24">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-white mb-6">Afiliados</h1>

          {/* Tabs and Copy Button */}
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
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Copiar enlace de afiliado
            </button>
          </div>

          {/* Info Banner */}
          <div className="bg-[#0c1b36] border border-[#1a3a6a] rounded-lg p-4 mb-6 flex items-start">
            <Info className="text-blue-400 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-blue-100 text-sm">
              As a Whop affiliate you get <span className="font-bold">30 %</span> of the revenue we generate from each
              creator you onboard for all sales they drive, for life!
            </p>
          </div>

          {/* Payment Configuration */}
          <div className="bg-[#0c1b36] border border-[#1a3a6a] rounded-lg p-4 mb-6 flex justify-between items-center">
            <p className="text-blue-100 text-sm">Configure sus cuentas de pago para cobrar rápidamente.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Establecer pagos por Whop
            </button>
          </div>

          {/* Financial Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a] group hover:border-[#3a3a3a] cursor-pointer">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-gray-400 text-sm">Saldo de reserva</h3>
                <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors" />
              </div>
              <p className="text-white text-2xl font-bold mb-1">0.00 US$</p>
              <p className="text-gray-500 text-xs">Hoy</p>
            </div>

            <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a] group hover:border-[#3a3a3a] cursor-pointer">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-gray-400 text-sm">Saldo pendiente</h3>
                <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors" />
              </div>
              <p className="text-white text-2xl font-bold mb-1">0.00 US$</p>
              <p className="text-gray-500 text-xs">Hoy</p>
            </div>

            <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a] group hover:border-[#3a3a3a] cursor-pointer">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-gray-400 text-sm">Disponible para pagar</h3>
                <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors" />
              </div>
              <p className="text-white text-2xl font-bold mb-1">0.00 US$</p>
              <p className="text-gray-500 text-xs">Hoy</p>
            </div>

            <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a] group hover:border-[#3a3a3a] cursor-pointer">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-gray-400 text-sm">En tránsito al banco</h3>
                <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors" />
              </div>
              <p className="text-white text-2xl font-bold mb-1">0.00 US$</p>
              <p className="text-gray-500 text-xs">Hoy</p>
            </div>
          </div>

          {/* Referred Creators Section */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              Creadores referidos <span className="ml-2 text-orange-400">🦊</span>
            </h2>

            {/* Table */}
            <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] overflow-hidden mb-4">
              <div className="grid grid-cols-4 border-b border-[#2a2a2a]">
                <div className="p-4 text-gray-400 font-medium text-sm">Creador</div>
                <div className="p-4 text-gray-400 font-medium text-sm">Has hecho (total)</div>
                <div className="p-4 text-gray-400 font-medium text-sm">Días de pago restantes</div>
                <div className="p-4 text-gray-400 font-medium text-sm">Fecha de referencia</div>
              </div>

              {/* Empty state */}
              <div className="py-16 flex flex-col items-center justify-center">
                <p className="text-gray-400 text-center mb-4">
                  Puedes ganar el 30% de nuestros ingresos de por vida por cualquier creador que recomiendes
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Copiar enlace de afiliado
                </button>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center text-sm text-gray-400">
              <div>Mostrando 1 a 0 de 0</div>
              <div className="flex space-x-2">
                <button className="p-1 rounded-md bg-[#1a1a1a] text-gray-500 disabled:opacity-50" disabled>
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="p-1 rounded-md bg-[#1a1a1a] text-gray-500 disabled:opacity-50" disabled>
                  <ChevronRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  Home,
  Package,
  CreditCard,
  Users,
  DollarSign,
  BarChart2,
  Settings,
  ChevronDown,
  ChevronRight,
  Plus,
} from "lucide-react"

export function DashboardSidebar() {
  const location = useLocation()
  const [expandedSections, setExpandedSections] = useState({
    usuarios: true,
    finanzas: true,
    marketing: true,
    ajustes: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="fixed left-[60px] top-0 w-[280px] bg-[#121212] border-r border-[#2a2a2a] h-screen overflow-y-auto rounded-lg">
      <div className="p-4 border-b border-[#2a2a2a] flex items-center">
        <div className="bg-[#1a1a1a] rounded-md h-10 w-10 flex items-center justify-center text-white font-bold mr-3">
          A
        </div>
        <div className="flex items-center">
          <span className="text-white font-medium">amazon</span>
          <ChevronDown className="h-4 w-4 text-gray-400 ml-2" />
        </div>
      </div>

      <div className="p-4">
        <nav className="space-y-0.5">
          <Link
            to="/dashboard"
            className="flex items-center px-4 py-2 text-gray-300 text-sm hover:bg-[#1a1a1a] rounded-lg"
          >
            <Home className="h-5 w-5 mr-3" />
            <span>Inicio</span>
          </Link>

          <Link
            to="/dashboard/whops"
            className="flex items-center px-4 py-2 text-gray-300 text-sm hover:bg-[#1a1a1a] rounded-lg"
          >
            <Package className="h-5 w-5 mr-3" />
            <span>Tus whops</span>
          </Link>

          <Link
            to="/dashboard/pagos"
            className="flex items-center px-4 py-2 text-gray-300 text-sm hover:bg-[#1a1a1a] rounded-lg"
          >
            <CreditCard className="h-5 w-5 mr-3" />
            <span>Enlaces de pago</span>
          </Link>

          {/* Usuarios Section */}
          <div>
            <button
              className="w-full flex items-center justify-between px-4 py-2 text-gray-300 text-sm hover:bg-[#1a1a1a] rounded-lg"
              onClick={() => toggleSection("usuarios")}
            >
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-3" />
                <span>Usuarios</span>
              </div>
              {expandedSections.usuarios ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>

            {expandedSections.usuarios && (
              <div className="ml-12 space-y-1 mt-1">
                <Link to="/dashboard/usuarios" className="block px-4 py-2 text-gray-400 text-xs hover:text-gray-300">
                  Usuarios
                </Link>
                <Link
                  to="/dashboard/listas-espera"
                  className="block px-4 py-2 text-gray-400 text-xs hover:text-gray-300"
                >
                  Listas de espera
                </Link>
                <Link to="/dashboard/cancelacion" className="block px-4 py-2 text-gray-400 text-xs hover:text-gray-300">
                  Motivos de cancelación
                </Link>
              </div>
            )}
          </div>

          {/* Finanzas Section */}
          <div>
            <button
              className="w-full flex items-center justify-between px-4 py-2 text-gray-300 text-sm hover:bg-[#1a1a1a] rounded-lg"
              onClick={() => toggleSection("finanzas")}
            >
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 mr-3" />
                <span>Finanzas</span>
              </div>
              {expandedSections.finanzas ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>

            {expandedSections.finanzas && (
              <div className="ml-12 space-y-1 mt-1">
                <Link to="/dashboard/pagos" className="block px-4 py-2 text-gray-400 text-xs hover:text-gray-300">
                  Pagos
                </Link>
                <Link to="/dashboard/disputas" className="block px-4 py-2 text-gray-400 text-xs hover:text-gray-300">
                  Disputas
                </Link>
                <Link to="/dashboard/resolucion" className="block px-4 py-2 text-gray-400 text-xs hover:text-gray-300">
                  Centro de resolución
                </Link>
              </div>
            )}
          </div>

          {/* Marketing Section */}
          <div>
            <button
              className="w-full flex items-center justify-between px-4 py-2 text-gray-300 text-sm hover:bg-[#1a1a1a] rounded-lg"
              onClick={() => toggleSection("marketing")}
            >
              <div className="flex items-center">
                <BarChart2 className="h-5 w-5 mr-3" />
                <span>Marketing</span>
              </div>
              {expandedSections.marketing ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>

            {expandedSections.marketing && (
              <div className="ml-12 space-y-1 mt-1">
                <Link
                  to="/dashboard/enlaces-seguimiento"
                  className="block px-4 py-2 text-gray-400 text-xs hover:text-gray-300"
                >
                  Enlaces de seguimiento
                </Link>
                <Link to="/dashboard/plomos" className="block px-4 py-2 text-gray-400 text-xs hover:text-gray-300">
                  Plomos
                </Link>
                <Link to="/dashboard/codigos" className="block px-4 py-2 text-gray-400 text-xs hover:text-gray-300">
                  Códigos promocionales
                </Link>
                <Link
                  to="/dashboard/affiliate/customer"
                  className="block px-4 py-2 text-gray-400 text-xs hover:text-gray-300"
                >
                  Afiliados
                </Link>
                <Link to="/dashboard/mensajes" className="block px-4 py-2 text-gray-400 text-xs hover:text-gray-300">
                  Mensajes
                </Link>
              </div>
            )}
          </div>

          {/* Ajustes Section */}
          <div>
            <button
              className="w-full flex items-center justify-between px-4 py-2 text-gray-300 text-sm hover:bg-[#1a1a1a] rounded-lg"
              onClick={() => toggleSection("ajustes")}
            >
              <div className="flex items-center">
                <Settings className="h-5 w-5 mr-3" />
                <span>Ajustes</span>
              </div>
              {expandedSections.ajustes ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>

            {expandedSections.ajustes && (
              <div className="ml-12 space-y-1 mt-1">
                <Link
                  to="/dashboard/ajustes/general"
                  className="block px-4 py-2 text-gray-400 text-xs hover:text-gray-300"
                >
                  General
                </Link>
                <Link
                  to="/dashboard/ajustes/equipo"
                  className="block px-4 py-2 text-gray-400 text-xs hover:text-gray-300"
                >
                  Equipo
                </Link>
                <Link to="/dashboard/ajustes/api" className="block px-4 py-2 text-gray-400 text-xs hover:text-gray-300">
                  Claves API
                </Link>
                <Link
                  to="/dashboard/ajustes/oauth"
                  className="block px-4 py-2 text-gray-400 text-xs hover:text-gray-300"
                >
                  OAuth
                </Link>
                <Link
                  to="/dashboard/ajustes/webhooks"
                  className="block px-4 py-2 text-gray-400 text-xs hover:text-gray-300"
                >
                  Webhooks
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>

      <div className="fixed bottom-4 left-4">
        <button className="bg-[#1a1a1a] hover:bg-[#252525] text-white p-2 rounded-full">
          <Plus className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}


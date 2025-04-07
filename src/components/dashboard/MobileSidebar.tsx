"use client"

import { useState, useEffect } from "react"
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
  X,
} from "lucide-react"

interface MobileSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const location = useLocation()
  const [expandedSections, setExpandedSections] = useState({
    usuarios: false,
    finanzas: false,
    marketing: false,
    ajustes: false,
  })

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        onClose()
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isOpen, onClose])

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={onClose}>
      <div
        className="fixed right-0 top-0 h-full w-[280px] bg-[#121212] overflow-y-auto z-50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Contenido del sidebar móvil */}
        <div className="p-4 border-b border-[#2a2a2a] flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-[#1a1a1a] rounded-md h-8 w-8 flex items-center justify-center text-white font-bold mr-2">
              A
            </div>
            <span className="text-white text-sm font-medium">amazon</span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="py-2">
          <nav className="space-y-1">
            <Link
              to="/dashboard"
              className="flex items-center px-4 py-2 text-gray-300 text-sm hover:bg-[#1a1a1a]"
              onClick={onClose}
            >
              <Home className="h-5 w-5 mr-3" />
              <span>Inicio</span>
            </Link>

            <Link
              to="/dashboard/whops"
              className="flex items-center px-4 py-2 text-gray-300 text-sm hover:bg-[#1a1a1a]"
              onClick={onClose}
            >
              <Package className="h-5 w-5 mr-3" />
              <span>Tus whops</span>
            </Link>

            <Link
              to="/dashboard/pagos"
              className="flex items-center px-4 py-2 text-gray-300 text-sm hover:bg-[#1a1a1a]"
              onClick={onClose}
            >
              <CreditCard className="h-5 w-5 mr-3" />
              <span>Enlaces de pago</span>
            </Link>

            {/* Usuarios Section */}
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-2 text-gray-300 text-sm hover:bg-[#1a1a1a]"
                onClick={() => toggleSection("usuarios")}
              >
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-3" />
                  <span>Usuarios</span>
                </div>
                {expandedSections.usuarios ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </button>

              {expandedSections.usuarios && (
                <div className="ml-8 space-y-1 py-1">
                  <Link
                    to="/dashboard/usuarios"
                    className="block px-4 py-2 text-gray-400 text-sm hover:text-gray-300"
                    onClick={onClose}
                  >
                    Usuarios
                  </Link>
                  <Link
                    to="/dashboard/listas-espera"
                    className="block px-4 py-2 text-gray-400 text-sm hover:text-gray-300"
                    onClick={onClose}
                  >
                    Listas de espera
                  </Link>
                  <Link
                    to="/dashboard/cancelacion"
                    className="block px-4 py-2 text-gray-400 text-sm hover:text-gray-300"
                    onClick={onClose}
                  >
                    Motivos de cancelación
                  </Link>
                </div>
              )}
            </div>

            {/* Finanzas Section */}
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-2 text-gray-300 text-sm hover:bg-[#1a1a1a]"
                onClick={() => toggleSection("finanzas")}
              >
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-3" />
                  <span>Finanzas</span>
                </div>
                {expandedSections.finanzas ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </button>

              {expandedSections.finanzas && (
                <div className="ml-8 space-y-1 py-1">
                  <Link
                    to="/dashboard/pagos"
                    className="block px-4 py-2 text-gray-400 text-sm hover:text-gray-300"
                    onClick={onClose}
                  >
                    Pagos
                  </Link>
                  <Link
                    to="/dashboard/disputas"
                    className="block px-4 py-2 text-gray-400 text-sm hover:text-gray-300"
                    onClick={onClose}
                  >
                    Disputas
                  </Link>
                </div>
              )}
            </div>

            {/* Marketing Section */}
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-2 text-gray-300 text-sm hover:bg-[#1a1a1a]"
                onClick={() => toggleSection("marketing")}
              >
                <div className="flex items-center">
                  <BarChart2 className="h-5 w-5 mr-3" />
                  <span>Marketing</span>
                </div>
                {expandedSections.marketing ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>

              {expandedSections.marketing && (
                <div className="ml-8 space-y-1 py-1">
                  <Link
                    to="/dashboard/affiliate/customer"
                    className="block px-4 py-2 text-gray-400 text-sm hover:text-gray-300"
                    onClick={onClose}
                  >
                    Afiliados
                  </Link>
                  <Link
                    to="/dashboard/mensajes"
                    className="block px-4 py-2 text-gray-400 text-sm hover:text-gray-300"
                    onClick={onClose}
                  >
                    Mensajes
                  </Link>
                </div>
              )}
            </div>

            {/* Ajustes Section */}
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-2 text-gray-300 text-sm hover:bg-[#1a1a1a]"
                onClick={() => toggleSection("ajustes")}
              >
                <div className="flex items-center">
                  <Settings className="h-5 w-5 mr-3" />
                  <span>Ajustes</span>
                </div>
                {expandedSections.ajustes ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </button>

              {expandedSections.ajustes && (
                <div className="ml-8 space-y-1 py-1">
                  <Link
                    to="/dashboard/ajustes/general"
                    className="block px-4 py-2 text-gray-400 text-sm hover:text-gray-300"
                    onClick={onClose}
                  >
                    General
                  </Link>
                  <Link
                    to="/dashboard/ajustes/equipo"
                    className="block px-4 py-2 text-gray-400 text-sm hover:text-gray-300"
                    onClick={onClose}
                  >
                    Equipo
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
        {/* Resto del contenido del sidebar móvil */}
      </div>
    </div>
  )
}


"use client"

import type React from "react"

import { useState } from "react"
import { DashboardSidebar } from "./DashboardSidebar"
import { DashboardHeader } from "./DashboardHeader"
import { MobileMenuToggle } from "./MobileMenuToggle"
import { MobileSidebar } from "./MobileSidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
  title?: string
}

export function DashboardLayout({ children, title }: DashboardLayoutProps) {
  const [selectedWhop, setSelectedWhop] = useState("amazon")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="flex min-h-screen bg-[#121212] relative">
      {/* Sidebar para iconos - visible en todos los tamaños */}
      

      {/* Sidebar principal - oculto en móvil, visible en desktop */}
      <div className="hidden md:block">
        <DashboardSidebar />
      </div>

      {/* Contenido principal */}
      <div className="flex-1 w-full pl-[60px] md:pl-[310px]">
        {/* Header fijo en la parte superior */}
        <DashboardHeader selectedWhop={selectedWhop} setSelectedWhop={setSelectedWhop} />

        {/* Contenido principal con padding para evitar que quede debajo del header */}
        <div className="pt-14 md:pt-16 pb-4 w-full overflow-x-hidden">{children}</div>
      </div>

      {/* Botón de menú móvil */}
      <MobileMenuToggle onToggle={toggleMobileMenu} isOpen={mobileMenuOpen} />

      {/* Sidebar móvil - solo visible cuando está abierto */}
      <MobileSidebar isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </div>
  )
}

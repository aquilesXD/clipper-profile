"use client"

import { useState } from "react"
import { DashboardSidebar } from "../../components/dashboard/DashboardSidebar"
import { DashboardHeader } from "../../components/dashboard/DashboardHeader"
import { DashboardContent } from "../../components/dashboard/DashboardContent"
import Sidebar from "../layout/Sidebar"
import { MobileMenuToggle } from "./MobileMenuToggle"
import { MobileSidebar } from "./MobileSidebar"


export default function Dashboard() {
  const [selectedWhop, setSelectedWhop] = useState("amazon")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="flex min-h-screen bg-[#121212] relative">
      <Sidebar />
      <DashboardSidebar />
      <div className="flex-1 w-full pl-[60px] md:pl-[310px]">
        <DashboardHeader selectedWhop={selectedWhop} setSelectedWhop={setSelectedWhop} />
        <div className="pt-14 md:pt-16">
          <DashboardContent />
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <MobileMenuToggle onToggle={toggleMobileMenu} isOpen={mobileMenuOpen} />

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </div>
  )
}


"use client"
import { Menu, X } from "lucide-react"

interface MobileMenuToggleProps {
  onToggle: () => void
  isOpen: boolean
}

export function MobileMenuToggle({ onToggle, isOpen }: MobileMenuToggleProps) {
  return (
    <button
      className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg md:hidden"
      onClick={onToggle}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  )
}


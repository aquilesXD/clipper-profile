"use client"

import { X } from "lucide-react"
import { useEffect, useRef } from "react"

interface AffiliationAssetsModalProps {
  isOpen: boolean
  onClose: () => void
  programName: string
}

export function AffiliationAssetsModal({ isOpen, onClose, programName }: AffiliationAssetsModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div
        ref={modalRef}
        className="bg-[#121212] border border-[#2a2a2a] rounded-lg w-full max-w-2xl overflow-hidden shadow-xl"
      >
        <div className="flex justify-between items-center p-4 border-b border-[#2a2a2a]">
          <h2 className="text-lg font-semibold text-white">Activos de afiliación para {programName}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-8 flex flex-col items-center justify-center min-h-[300px]">
          <p className="text-white text-lg font-medium mb-2">No hay activos disponibles</p>
          <p className="text-gray-400 text-center mb-6">
            Una vez que el creador de este whop suba activos, los verás aquí.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
            Solicitar activos
          </button>
        </div>
      </div>
    </div>
  )
}


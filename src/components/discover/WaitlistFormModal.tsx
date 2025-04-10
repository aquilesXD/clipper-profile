"use client"

import type React from "react"

import { useState } from "react"

interface WaitlistFormModalProps {
  onClose: () => void
}

export function WaitlistFormModal({ onClose }: WaitlistFormModalProps) {
  const [formData, setFormData] = useState({
    confirmation: "",
    link: "",
    location: "",
    showsFace: "",
    understands: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the form submission
    console.log("Form submitted:", formData)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1a1a] rounded-lg overflow-hidden relative" style={{ width: "600px", maxHeight: "90vh" }}>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-gray-300 z-10"
          aria-label="Close modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="p-6">
          <h2 className="text-white text-xl font-bold mb-4">
            Rellene los siguientes campos antes de inscribirse en esta lista de espera
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-white mb-1">
                Necesitas un mínimo de 100,000 visitas en las redes sociales antes de ser aceptado, solo postula si tienes eso. Escribe OK si entiendes <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="confirmation"
                  value={formData.confirmation}
                  onChange={handleChange}
                  placeholder="OKAY"
                  className="w-full bg-[#2a2a2a] text-white p-3 rounded-md border border-[#3a3a3a] focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-1">
                  Link your account/ best post <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  placeholder="link here"
                  className="w-full bg-[#2a2a2a] text-white p-3 rounded-md border border-[#3a3a3a] focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-1">
                Nosotros solo aceptamos (USA,UK,AUS,CA,NZ) Creadores - por favor indica dónde estás ubicado{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="location"
                  className="w-full bg-[#2a2a2a] text-white p-3 rounded-md border border-[#3a3a3a] focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-1">
                Muestras tu cara en tu contenido <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="showsFace"
                  value={formData.showsFace}
                  onChange={handleChange}
                  placeholder="yes/no"
                  className="w-full bg-[#2a2a2a] text-white p-3 rounded-md border border-[#3a3a3a] focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-1">
                Si lo aceptan, deberá hacer al menos 1 video dentro de los primeros 3 días o será? <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="understands"
                  value={formData.understands}
                  onChange={handleChange}
                  placeholder="Yes/No"
                  className="w-full bg-[#2a2a2a] text-white p-3 rounded-md border border-[#3a3a3a] focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium text-lg mt-4"
              >
                Continúar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


"use client"

import { useState } from "react"
import { WaitlistFormModal } from "./WaitlistFormModal"

interface WhopCreatorsModalProps {
    onClose: () => void
    reward?: { // Nueva prop
      title: string
      creator: string
      rate: string
      paidAmount: string
      totalAmount: string
      percentage: number
    }
  }

export function WhopCreatorsModal({ onClose }: WhopCreatorsModalProps) {
  const [showWaitlistForm, setShowWaitlistForm] = useState(false)

  const handleWaitlistClick = () => {
    setShowWaitlistForm(true)
  }

  const handleWaitlistClose = () => {
    setShowWaitlistForm(false)
  }

  // Fixed content for the Whop UGC Creators card only
  const title = "Whop Creators"
  const subtitle = "Only the elite allowed."
  const cardTitle = "Whop UGC Creators"
  const rating = "4.85"
  const ratingCount = "212"
  const price = "Free"
  const pricePeriod = "lifetime"
  const description =
    "Contamos con un presupuesto mensual de $100,000 para recompensar a los creadores que publiquen contenido sobre Whop en línea. ¡Solo el 1% de los mejores creadores serán seleccionados para ganar dinero promoviendo Whop!"
  const mainHeading = "Gana $3,500 por cada 1,000,000 de vistas en videos Whop UGC!"

  return (
    <>
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
        <div className="bg-[#1a1a1a] rounded-lg overflow-hidden relative" style={{ width: "678px", height: "707px" }}>
          {/* Close button */}
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

          {/* Orange header */}
          <div className="bg-[#FF4D00] p-8 text-center" style={{ height: "283px" }}>
            <div className="flex justify-center mb-4">
              <svg width="70" height="70" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24 12C26.2091 12 28 10.2091 28 8C28 5.79086 26.2091 4 24 4C21.7909 4 20 5.79086 20 8C20 10.2091 21.7909 12 24 12Z"
                  fill="white"
                />
                <path d="M32 20L24 12L16 20L8 12V28L24 44L40 28V12L32 20Z" fill="white" />
              </svg>
            </div>
            <h2 className="text-white text-5xl font-bold mb-3">{title}</h2>
            <p className="text-white text-2xl">{subtitle}</p>
          </div>

          {/* Content */}
          <div className="bg-[#121212]" style={{ height: "424px" }}>
            <div className="p-6">
              {/* Creator info */}
              <div className="flex items-center mb-4">
                <div className="bg-[#FF4D00] rounded-md p-2 mr-3">
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M24 12C26.2091 12 28 10.2091 28 8C28 5.79086 26.2091 4 24 4C21.7909 4 20 5.79086 20 8C20 10.2091 21.7909 12 24 12Z"
                      fill="white"
                    />
                    <path d="M32 20L24 12L16 20L8 12V28L24 44L40 28V12L32 20Z" fill="white" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold">{cardTitle}</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="text-white ml-1">
                      {rating} ({ratingCount})
                    </span>
                    <span className="text-white ml-16">{price}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{pricePeriod}</span>
                </div>
              </div>

              {/* Main content */}
              <div>
                <h2 className="text-white text-2xl font-bold mb-3">{mainHeading}</h2>

                <p className="text-gray-300 text-base text-justify">{description}</p>
              </div>
            </div>

            {/* Buttons - Fixed at bottom */}
            <div className="absolute bottom-6 left-6 right-6">
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium mb-3 text-lg"
                onClick={handleWaitlistClick}
              >
                Inscribirse en la lista de espera
              </button>

              <button
                className="w-full bg-transparent text-blue-400 py-2 px-4 rounded-md font-medium flex items-center justify-center text-lg"
                onClick={onClose}
              >
                Llévame a la página de la tienda
                <svg
                  className="ml-2"
                  width="20"
                  height="20"
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
              </button>
            </div>
          </div>
        </div>
      </div>

      {showWaitlistForm && <WaitlistFormModal onClose={handleWaitlistClose} />}
    </>
  )
}


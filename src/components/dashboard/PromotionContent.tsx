import { DashboardLayout } from "./DashBoardLayout"
import { Volume2 } from "lucide-react"

export function PromotionContent() {
  return (
    <DashboardLayout>
      <div className="px-4 md:px-6 py-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
            <div className="mb-8">
              {/* Ilustración de megáfono */}
              <div className="w-64 h-64 relative mx-auto flex items-center justify-center">
                <svg width="180" height="180" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  {/* Megáfono */}
                  <g transform="translate(55, 50)">
                    {/* Cuerpo del megáfono */}
                    <path d="M0,40 L70,10 L70,70 L0,40 Z" fill="#FF3E21" />
                    <ellipse cx="70" cy="40" rx="8" ry="30" fill="#FF3E21" />

                    {/* Borde amarillo */}
                    <path d="M0,40 L70,10 L70,70 L0,40 Z" fill="none" stroke="#CEFE00" strokeWidth="3" />
                    <ellipse cx="70" cy="40" rx="8" ry="30" fill="none" stroke="#CEFE00" strokeWidth="3" />

                    {/* Mango del megáfono */}
                    <rect x="-20" y="35" width="25" height="10" rx="5" fill="#CEFE00" />

                    {/* Botón superior */}
                    <rect x="-15" y="30" width="5" height="5" rx="2" fill="#e0e0e0" />

                    {/* Detalles blancos */}
                    <path d="M20,30 L30,26 L30,29 L20,33 Z" fill="white" opacity="0.7" />
                    <path d="M20,50 L30,54 L30,51 L20,47 Z" fill="white" opacity="0.7" />

                    {/* Símbolo de sonido */}
                    <path d="M85,20 C95,25 95,55 85,60" fill="none" stroke="white" strokeWidth="2" opacity="0.7" />
                    <path d="M90,25 C100,30 100,50 90,55" fill="none" stroke="white" strokeWidth="2" opacity="0.5" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Active la promoción emergente para <span className="text-[#cefe00]">conseguir su primer cliente potencial</span>
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto text-lg">
                Recopile información de los usuarios que visitan la página de su tienda pero no compran.
              </p>
            </div>

            <button
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-md"
            >
              <Volume2 size={20} className="mr-2" />
              Activar promoción emergente
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

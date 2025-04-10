import { DashboardLayout } from "./DashBoardLayout"
import { Mail } from "lucide-react"

export function CancellationReasonsContent() {
  return (
    <DashboardLayout>
      <div className="px-4 md:px-6 py-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
            <div className="mb-8">
              {/* Ilustración de diana con dardo */}
              <div className="w-64 h-64 relative mx-auto flex items-center justify-center">
                <svg width="180" height="180" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(55, 35)">
                    {/* Diana - círculos concéntricos */}
                    <circle cx="50" cy="70" r="50" fill="#FF2500" />
                    <circle cx="50" cy="70" r="35" fill="white" />
                    <circle cx="50" cy="70" r="20" fill="#FF2500" />
                    <circle cx="50" cy="70" r="7" fill="white" />

                    {/* Dardo */}
                    <g transform="translate(50, 70) rotate(-45)">
                      {/* Punta del dardo */}
                      <polygon points="0,0 -5,-15 0,-40 5,-15" fill="#333" />

                      {/* Cuerpo del dardo */}
                      <rect x="-3" y="-60" width="6" height="25" fill="#333" />

                      {/* Estabilizadores */}
                      <polygon points="0,-60 -15,-70 -15,-85 0,-75" fill="#CEFE00" />
                      <polygon points="0,-60 15,-70 15,-85 0,-75" fill="#CEFE00" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>

            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-4 text-white">
                No hay <span className="text-[#cefe00]">motivos de</span> cancelación .
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto text-base">
                Todo está bien aquí - tómese un segundo para respirar, no hay nada que resolver aquí, pero puede activar los mensajes automáticos para enviar un mensaje a los usuarios que cancelan.
              </p>
            </div>

            <button
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-md w-full max-w-xl"
            >
              <Mail className="mr-2 h-5 w-5" />
              Activar el mensaje automático dejado por el usuario
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

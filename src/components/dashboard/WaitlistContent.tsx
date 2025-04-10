import { DashboardLayout } from "./DashBoardLayout"

export function WaitlistContent() {
  return (
    <DashboardLayout>
      <div className="px-4 md:px-6 py-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
            <div className="mb-8">
              {/* Ilustración de sobre con teléfono */}
              <div className="w-64 h-64 relative mx-auto flex items-center justify-center">
                <svg width="180" height="180" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  {/* Sobre rojo */}
                  <g transform="translate(50, 60)">
                    {/* Base del sobre */}
                    <path d="M0,30 L100,30 L100,80 L0,80 Z" fill="#FF4D33" />

                    {/* Solapa superior del sobre */}
                    <path d="M0,30 L50,0 L100,30 L100,40 L50,10 L0,40 Z" fill="#FF3E21" />

                    {/* Sombras y brillos */}
                    <circle cx="10" cy="70" r="3" fill="white" opacity="0.5" />
                    <circle cx="90" cy="40" r="3" fill="white" opacity="0.5" />
                    <circle cx="80" cy="70" r="2" fill="white" opacity="0.5" />
                  </g>

                  {/* Teléfono con borde verde */}
                  <g transform="translate(85, 35) rotate(-15)">
                    {/* Cuerpo del teléfono */}
                    <rect x="0" y="0" width="40" height="70" rx="5" fill="#f5f5f5" />

                    {/* Borde verde */}
                    <rect x="0" y="0" width="40" height="70" rx="5" fill="none" stroke="#CEFE00" stroke-width="4" />

                    {/* Pantalla */}
                    <rect x="4" y="8" width="32" height="54" rx="2" fill="#e0e0e0" />

                    {/* Botón home */}
                    <circle cx="20" cy="65" r="3" fill="#e0e0e0" stroke="#d0d0d0" stroke-width="1" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-4 text-white">
                No hay entradas en <span className="text-[#cefe00]">lista de espera</span>
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto text-lg">
                Añada una lista de espera a uno de sus whops. Vaya a la página de whops para empezar.
              </p>
            </div>

            <a
              href="/dashboard/whops"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-md"
            >
              Ver sus whops
            </a>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

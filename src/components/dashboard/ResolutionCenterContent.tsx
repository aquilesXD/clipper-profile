import { DashboardLayout } from "./DashBoardLayout"

export function ResolutionCenterContent() {
  return (
    <DashboardLayout>
      <div className="px-4 md:px-6 py-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
            <div className="mb-8">
              {/* Ilustración de libro/notebook con pluma */}
              <div className="w-64 h-64 relative mx-auto flex items-center justify-center">
                <svg width="180" height="180" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  {/* Libro/Notebook */}
                  <g transform="translate(40, 45)">
                    {/* Base del libro */}
                    <rect x="0" y="0" width="80" height="100" rx="3" fill="#FF4D33" />

                    {/* Páginas */}
                    <rect x="5" y="5" width="70" height="90" rx="2" fill="white" />

                    {/* Línea de la página */}
                    <line x1="15" y1="25" x2="65" y2="25" stroke="#e0e0e0" strokeWidth="2" />
                    <line x1="15" y1="40" x2="65" y2="40" stroke="#e0e0e0" strokeWidth="2" />
                    <line x1="15" y1="55" x2="65" y2="55" stroke="#e0e0e0" strokeWidth="2" />
                    <line x1="15" y1="70" x2="65" y2="70" stroke="#e0e0e0" strokeWidth="2" />
                    <line x1="15" y1="85" x2="40" y2="85" stroke="#e0e0e0" strokeWidth="2" />
                  </g>

                  {/* Pluma/Lápiz */}
                  <g transform="translate(100, 40) rotate(45)">
                    {/* Cuerpo de la pluma */}
                    <rect x="0" y="0" width="10" height="80" rx="2" fill="#CEFE00" />

                    {/* Punta de la pluma */}
                    <polygon points="0,0 10,0 5,-20" fill="#FF4D33" />

                    {/* Detalles de la pluma */}
                    <rect x="2" y="15" width="6" height="10" rx="1" fill="#FF4D33" opacity="0.7" />
                    <rect x="2" y="35" width="6" height="10" rx="1" fill="#FF4D33" opacity="0.5" />
                    <rect x="2" y="55" width="6" height="10" rx="1" fill="#FF4D33" opacity="0.3" />
                  </g>

                  {/* Destellos */}
                  <polygon points="120,30 125,20 130,30 125,40" fill="white" />
                  <polygon points="150,80 155,70 160,80 155,90" fill="white" />
                  <circle cx="90" cy="70" r="3" fill="white" />
                </svg>
              </div>
            </div>

            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-4">
                Aquí no hay nada que <span className="text-[#cefe00]">resolver</span>.
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto text-lg">
                Todo bien aquí - tómate un segundo para respirar. No hay nada que resolver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

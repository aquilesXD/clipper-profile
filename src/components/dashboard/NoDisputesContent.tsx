import { DashboardLayout } from "./DashBoardLayout"

export function NoDisputesContent() {
  return (
    <DashboardLayout>
      <div className="px-4 md:px-6 py-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
            <div className="mb-8">
              {/* Ilustración de escudo rojo */}
              <div className="w-64 h-64 relative mx-auto flex items-center justify-center">
                <svg width="180" height="180" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  {/* Escudo */}
                  <g transform="translate(50, 30)">
                    {/* Base del escudo */}
                    <path d="M0,30 C0,110 50,140 50,140 C50,140 100,110 100,30 C100,30 50,0 0,30 Z" fill="#FF4D33" />

                    {/* Detalles blancos del escudo */}
                    <path d="M10,40 C10,100 50,120 50,120 C50,120 90,100 90,40 C90,40 50,15 10,40 Z" fill="white" fillOpacity="0.3" />

                    {/* Corazón/W en el centro */}
                    <path d="M50,80 C40,65 25,65 25,80 C25,95 50,105 50,105 C50,105 75,95 75,80 C75,65 60,65 50,80 Z" fill="white" />
                    <path d="M34,88 L50,72 L66,88 L50,105 Z" fill="white" />

                    {/* Brillos */}
                    <circle cx="12" cy="35" r="3" fill="white" />
                    <circle cx="88" cy="35" r="3" fill="white" />
                    <circle cx="30" cy="120" r="3" fill="white" />
                    <circle cx="70" cy="120" r="3" fill="white" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-4 text-white">
                ¡Sin disputas!
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto text-lg">
                Todo bien aquí - tómate un segundo para respirar. No hay disputas que resolver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

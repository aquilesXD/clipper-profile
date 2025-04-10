import { DashboardLayout } from "./DashBoardLayout"

export function FirstPaymentContent() {
  return (
    <DashboardLayout>
      <div className="px-4 md:px-6 py-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
            <div className="mb-8">
              {/* Ilustración de rollo de papel */}
              <div className="w-64 h-64 relative mx-auto flex items-center justify-center">
                <svg width="180" height="180" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  {/* Rollo de papel */}
                  <g transform="translate(60, 30)">
                    {/* Papel */}
                    <path d="M0,70 C0,30 0,0 0,0 C22,0 43,0 65,0 C65,30 65,70 65,70 C65,70 40,85 30,70 C20,85 0,70 0,70 Z" fill="#CEFE00" />

                    {/* Orificios en el papel */}
                    <circle cx="15" cy="15" r="7" fill="white" />
                    <circle cx="15" cy="40" r="7" fill="white" />
                    <circle cx="50" cy="15" r="7" fill="white" />
                    <circle cx="50" cy="40" r="7" fill="white" />

                    {/* Rollo */}
                    <circle cx="33" cy="0" r="25" fill="white" />
                    <circle cx="33" cy="0" r="7" fill="#FF4D33" />

                    {/* Punta del rollo */}
                    <rect x="26" y="-10" width="14" height="20" fill="#FF4D33" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Reciba su <span className="text-[#cefe00]">primer</span> pago
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto text-lg">
                ¡Consigue tu primer cliente de pago! Haga clic y comparta su whop a continuación.
              </p>
            </div>

            <a
              href="/dashboard/whops"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-md"
            >
              Ir a mis whops
            </a>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

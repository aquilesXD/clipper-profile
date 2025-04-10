import { useState } from "react";
import { DashboardLayout } from "./DashBoardLayout";
import { Plus } from "lucide-react";
import { CreateTrackingLinkModal } from "./CreateTrackingLinkModal";


export function TrackingLinksContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <DashboardLayout>
      <div className="px-4 md:px-6 py-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
            <div className="mb-8">
              {/* Ilustración de pin de ubicación con dinero */}
              <div className="w-64 h-64 relative mx-auto flex items-center justify-center">
                <svg width="180" height="180" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  {/* Billete verde */}
                  <g transform="translate(50, 90) rotate(-30)">
                    <rect x="0" y="0" width="80" height="50" rx="3" fill="#CEFE00" />
                    <rect x="5" y="5" width="70" height="40" rx="2" fill="#CEFE00" opacity="0.8" />
                    <circle cx="15" cy="25" r="7" fill="white" fillOpacity="0.5" />
                    <circle cx="65" cy="25" r="7" fill="white" fillOpacity="0.5" />
                  </g>

                  {/* Pin de ubicación */}
                  <g transform="translate(90, 20)">
                    {/* Base del pin */}
                    <path d="M40,40 C40,20 20,0 0,0 C-20,0 -40,20 -40,40 C-40,60 0,120 0,120 C0,120 40,60 40,40 Z" fill="#FF4D33" />

                    {/* Agujero del pin */}
                    <circle cx="0" cy="40" r="15" fill="#101010" />

                    {/* Brillos */}
                    <circle cx="-25" cy="25" r="3" fill="white" />
                    <circle cx="25" cy="25" r="3" fill="white" />
                    <polygon points="-10,65 0,75 10,65" fill="white" opacity="0.3" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Cree su <span className="text-[#cefe00]">primer</span> enlace de seguimiento
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto text-lg">
                Cree un enlace de seguimiento para controlar qué canales convierten mejor.
              </p>
            </div>

            <button
              onClick={openModal}
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-md"
            >
              <Plus size={20} className="mr-2" />
              Crear enlace de seguimiento
            </button>
          </div>
        </div>
      </div>

      {/* Modal para crear enlace de seguimiento */}
      <CreateTrackingLinkModal isOpen={isModalOpen} onClose={closeModal} />
    </DashboardLayout>
  );
}

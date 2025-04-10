import { useState } from "react";
import { DashboardLayout } from "./DashBoardLayout";
import { Plus } from "lucide-react";
import { CreatePromoCodeModal } from "./CreatePromoCodeModal";

export function PromoCodeContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <DashboardLayout>
      <div className="px-4 md:px-6 py-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
            <div className="mb-8">
              {/* Ilustración de documentos/sobres (la misma imagen de la primera vista) */}
              <div className="w-64 h-64 relative mx-auto flex items-center justify-center">
                <svg width="180" height="180" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <clipPath id="paymentIconClip">
                      <rect x="0" y="0" width="200" height="200" />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#paymentIconClip)">
                    {/* Fondo negro */}
                    <rect x="0" y="0" width="200" height="200" fill="#0c0c0c" opacity="0" />

                    {/* Rectángulo rojo */}
                    <rect x="50" y="90" width="100" height="80" fill="#FF4500" />

                    {/* Documentos verdes */}
                    <rect x="120" y="30" width="60" height="80" rx="5" fill="#CEFE00" transform="rotate(15 120 30)" />
                    <rect x="30" y="60" width="60" height="80" rx="5" fill="#CEFE00" transform="rotate(-15 30 60)" />
                    <rect x="80" y="50" width="60" height="80" rx="5" fill="#CEFE00" transform="rotate(5 80 50)" />

                    {/* Círculos blancos en los documentos verdes */}
                    <circle cx="150" cy="50" r="15" fill="white" />
                    <circle cx="60" cy="80" r="15" fill="white" />
                    <circle cx="110" cy="70" r="15" fill="white" />

                    {/* Papel blanco */}
                    <path d="M20,100 L50,80 L100,80 L100,160 L20,160 Z" fill="white" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Cree su <span className="text-[#cefe00]">primer</span> código promocional
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto text-lg">
                ¡Consigue más ventas creando tu primer código promocional para compartir con los usuarios!
              </p>
            </div>

            <button
              onClick={openModal}
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-md"
            >
              <Plus size={20} className="mr-2" />
              Crear código promocional
            </button>
          </div>
        </div>
      </div>

      {/* Modal para crear código promocional */}
      <CreatePromoCodeModal isOpen={isModalOpen} onClose={closeModal} />
    </DashboardLayout>
  );
}
